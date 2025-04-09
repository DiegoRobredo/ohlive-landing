import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const inputDir = 'public/models'
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.glb'))

files.forEach(file => {
  const inputPath = path.join(inputDir, file)
  const outputPath = path.join(inputDir, file.replace('.glb', '-draco.glb'))

  console.log(`🔧 Compressing ${file} → ${path.basename(outputPath)}`)
  execSync(`npx gltf-transform compress ${inputPath} ${outputPath} --draco`)
})