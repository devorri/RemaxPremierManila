const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'src', 'assets', 'partners');
const files = ['gumersindo.png', 'glennis.png', 'carlo.png', 'maryanne.png'];

async function optimize() {
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, `optimized_${file}`);
    
    const stats = fs.statSync(inputPath);
    console.log(`${file}: ${(stats.size / 1024 / 1024).toFixed(1)}MB`);
    
    await sharp(inputPath)
      .resize(600, 600, { fit: 'cover', position: 'top' })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    console.log(`  -> optimized: ${(newStats.size / 1024).toFixed(0)}KB`);
    
    // Replace original with optimized
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
  }
  console.log('\nDone! All images optimized.');
}

optimize().catch(console.error);
