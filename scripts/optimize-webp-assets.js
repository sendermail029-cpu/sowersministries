const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(process.cwd(), 'public')
const maxWidth = 1600
const quality = 72

function walk(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, fileList)
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.webp') {
      fileList.push(fullPath)
    }
  }
  return fileList
}

async function optimize(filePath) {
  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()
    const resizeOptions = metadata.width && metadata.width > maxWidth
      ? { width: maxWidth, withoutEnlargement: true }
      : undefined

    const tempPath = `${filePath}.tmp.webp`

    let pipeline = sharp(filePath).rotate()
    if (resizeOptions) {
      pipeline = pipeline.resize(resizeOptions)
    }

    await pipeline.webp({ quality, effort: 6 }).toFile(tempPath)

    const oldSize = fs.statSync(filePath).size
    const newSize = fs.statSync(tempPath).size

    if (newSize <= oldSize) {
      try {
        fs.rmSync(filePath, { force: true })
        fs.renameSync(tempPath, filePath)
        return { filePath, oldSize, newSize, changed: true, skipped: false }
      } catch {
        fs.rmSync(tempPath, { force: true })
        return { filePath, oldSize, newSize: oldSize, changed: false, skipped: true }
      }
    }

    fs.rmSync(tempPath, { force: true })
    return { filePath, oldSize, newSize: oldSize, changed: false, skipped: false }
  } catch {
    return { filePath, oldSize: 0, newSize: 0, changed: false, skipped: true }
  }
}

async function main() {
  const files = walk(publicDir)
  let changedCount = 0
  let totalSaved = 0
  let skippedCount = 0

  for (const filePath of files) {
    const result = await optimize(filePath)
    if (result.changed) {
      changedCount += 1
      totalSaved += result.oldSize - result.newSize
    }
    if (result.skipped) {
      skippedCount += 1
    }
  }

  console.log(`Optimized ${changedCount} webp files. Saved ${Math.round(totalSaved / 1024)} KB. Skipped ${skippedCount} locked files.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
