const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = process.cwd()
const publicDir = path.join(root, 'public')
const textRoots = ['app', 'components', 'data'].map((dir) => path.join(root, dir))
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'])

function walk(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, fileList)
    } else {
      fileList.push(fullPath)
    }
  }
  return fileList
}

function replaceInFile(filePath, replacements) {
  const original = fs.readFileSync(filePath, 'utf8')
  let next = original

  for (const [from, to] of replacements) {
    next = next.split(from).join(to)
  }

  if (next !== original) {
    fs.writeFileSync(filePath, next, 'utf8')
    return true
  }

  return false
}

async function main() {
  const publicFiles = walk(publicDir)
  const replacements = []

  for (const filePath of publicFiles) {
    const ext = path.extname(filePath)
    if (!imageExtensions.has(ext)) continue

    const parsed = path.parse(filePath)
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`)

    if (!fs.existsSync(webpPath)) {
      await sharp(filePath).rotate().webp({ quality: 82 }).toFile(webpPath)
    }

    const relOriginal = `/${path.relative(publicDir, filePath).replace(/\\/g, '/')}`
    const relWebp = `/${path.relative(publicDir, webpPath).replace(/\\/g, '/')}`

    replacements.push([relOriginal, relWebp])
    replacements.push([encodeURI(relOriginal), encodeURI(relWebp)])

    fs.unlinkSync(filePath)
  }

  const textFiles = textRoots.flatMap((dir) => walk(dir)).filter((filePath) =>
    ['.ts', '.tsx', '.js', '.jsx', '.json'].includes(path.extname(filePath))
  )

  let updatedCount = 0
  for (const filePath of textFiles) {
    if (replaceInFile(filePath, replacements)) {
      updatedCount += 1
    }
  }

  console.log(`Converted ${replacements.length / 2} images to webp and updated ${updatedCount} files.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
