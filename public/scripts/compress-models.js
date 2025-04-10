import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const inputDir = 'public/models'

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.glb'))

files.forEach(file => {
  const inputPath = path.join(inputDir, file).replace(/\\/g, '/')
  const outputPath = path.join(inputDir, file.replace('.glb', '-draco.glb')).replace(/\\/g, '/')

  console.log(`🔧 Compressing ${file} → ${path.basename(outputPath)}`)

  try {
    execSync(`gltf-transform optimize "${inputPath}" "${outputPath}" --compress draco --texture-compress webp`, {
      stdio: 'inherit'
    })
  } catch (error) {
    console.error(`❌ Error compressing ${file}:\n`, error.message)
  }
})