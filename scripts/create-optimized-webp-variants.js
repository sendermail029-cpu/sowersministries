const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = process.cwd()
const publicDir = path.join(root, 'public')
const sourceDirs = ['app', 'components', 'data'].map((dir) => path.join(root, dir))
const maxWidth = 1600
const quality = 72

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else files.push(full)
  }
  return files
}

function getOptimizedRef(ref) {
  return ref.replace(/\.webp$/i, '-opt.webp')
}

async function ensureOptimizedVariant(refPath) {
  const sourcePath = path.join(publicDir, refPath.replace(/^\//, '').replace(/\//g, path.sep))
  const optimizedRef = getOptimizedRef(refPath)
  const outputPath = path.join(publicDir, optimizedRef.replace(/^\//, '').replace(/\//g, path.sep))

  if (!fs.existsSync(sourcePath)) return null
  if (fs.existsSync(outputPath)) return optimizedRef

  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true })

  const image = sharp(sourcePath)
  const metadata = await image.metadata()
  const resizeOptions = metadata.width && metadata.width > maxWidth
    ? { width: maxWidth, withoutEnlargement: true }
    : undefined

  let pipeline = sharp(sourcePath).rotate()
  if (resizeOptions) pipeline = pipeline.resize(resizeOptions)

  await pipeline.webp({ quality, effort: 6 }).toFile(outputPath)
  return optimizedRef
}

async function main() {
  const textFiles = sourceDirs
    .flatMap((dir) => walk(dir))
    .filter((file) => ['.ts', '.tsx', '.js', '.jsx', '.json'].includes(path.extname(file)))

  const refPattern = /\/[^"'`\s)]+?\.webp/gi
  const uniqueRefs = new Set()

  for (const filePath of textFiles) {
    const content = fs.readFileSync(filePath, 'utf8')
    const matches = content.match(refPattern) || []
    for (const match of matches) uniqueRefs.add(match)
  }

  const replacements = []
  for (const ref of uniqueRefs) {
    const optimizedRef = await ensureOptimizedVariant(ref)
    if (optimizedRef) replacements.push([ref, optimizedRef])
  }

  let updatedFiles = 0
  for (const filePath of textFiles) {
    const original = fs.readFileSync(filePath, 'utf8')
    let updated = original
    for (const [from, to] of replacements) {
      updated = updated.split(from).join(to)
    }
    if (updated !== original) {
      fs.writeFileSync(filePath, updated, 'utf8')
      updatedFiles += 1
    }
  }

  console.log(`Created ${replacements.length} optimized variants and updated ${updatedFiles} files.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
