const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Pfad zu den App-Screenshots
const screenshotsDir = path.join(__dirname, '../public/images/app-screenshots-organized');
// Ausgabeverzeichnis für optimierte Bilder
const outputDir = screenshotsDir;

// Stelle sicher, dass das Ausgabeverzeichnis existiert
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Größen für responsive Bilder
const sizes = [
  { width: 280, height: 580, suffix: 'small' },
  { width: 380, height: 780, suffix: 'medium' }
];

async function generatePlaceholder(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(20) // Tiny placeholder
      .blur(10)
      .toBuffer()
      .then(async (data) => {
        // Convert to base64
        const base64 = `data:image/png;base64,${data.toString('base64')}`;
        // Write to a small JS file
        fs.writeFileSync(
          outputPath, 
          `export default "${base64}";`
        );
      });
    console.log(`  - Placeholder erstellt: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`  - Fehler bei der Placeholder-Generierung für ${inputPath}:`, error);
    return false;
  }
}

async function optimizeAppScreenshots() {
  try {
    // Alle PNG-Dateien lesen
    const files = fs.readdirSync(screenshotsDir).filter(file => file.endsWith('.png'));
    
    console.log(`Gefundene PNG-Dateien: ${files.join(', ')}`);
    
    // Für jede PNG-Datei
    for (const file of files) {
      const filePath = path.join(screenshotsDir, file);
      const stats = fs.statSync(filePath);
      const fileSizeInKb = stats.size / 1024;
      
      console.log(`Optimiere ${file} (${fileSizeInKb.toFixed(2)}KB)`);
      
      // Backup erstellen, falls noch nicht existiert
      const backupPath = path.join(screenshotsDir, `original_${file}`);
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
        console.log(`  - Backup erstellt: original_${file}`);
      }
      
      try {
        // Placeholder für Blur-Effekt generieren
        const fileNameWithoutExt = path.basename(file, path.extname(file));
        const placeholderPath = path.join(outputDir, `${fileNameWithoutExt}-placeholder.js`);
        await generatePlaceholder(filePath, placeholderPath);
        
        // Responsive Versionen erstellen
        for (const size of sizes) {
          const resizedFileName = `${fileNameWithoutExt}-${size.suffix}${path.extname(file)}`;
          const resizedFilePath = path.join(outputDir, resizedFileName);
          
          // PNG optimieren
          await sharp(filePath)
            .resize(size.width, size.height, { 
              fit: 'contain',
              background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png({ 
              quality: 80,
              compressionLevel: 9,
              adaptiveFiltering: true,
              palette: true
            })
            .toFile(resizedFilePath);
          
          console.log(`  - Responsive Version erstellt: ${resizedFileName}`);
          
          // WebP-Version
          await sharp(resizedFilePath)
            .webp({ quality: 75 })
            .toFile(path.join(outputDir, resizedFileName.replace('.png', '.webp')));
          
          console.log(`  - WebP-Version erstellt: ${resizedFileName.replace('.png', '.webp')}`);
          
          // AVIF-Version
          await sharp(resizedFilePath)
            .avif({ quality: 70 })
            .toFile(path.join(outputDir, resizedFileName.replace('.png', '.avif')));
          
          console.log(`  - AVIF-Version erstellt: ${resizedFileName.replace('.png', '.avif')}`);
        }
        
        // Original PNG optimieren
        await sharp(filePath)
          .png({ 
            quality: 80,
            compressionLevel: 9,
            adaptiveFiltering: true,
            palette: true
          })
          .toFile(path.join(outputDir, `temp_${file}`));
        
        // Nach erfolgreicher Optimierung die Datei ersetzen
        fs.renameSync(path.join(outputDir, `temp_${file}`), filePath);
        
        // Größe nach Optimierung überprüfen
        const newStats = fs.statSync(filePath);
        const newFileSizeInKb = newStats.size / 1024;
        const savings = fileSizeInKb - newFileSizeInKb;
        
        console.log(`  - Optimiert: ${newFileSizeInKb.toFixed(2)}KB (${savings.toFixed(2)}KB gespart, ${((savings/fileSizeInKb)*100).toFixed(2)}%)`);
        
        // WebP und AVIF für das Original erstellen
        await sharp(filePath)
          .webp({ quality: 75 })
          .toFile(path.join(outputDir, file.replace('.png', '.webp')));
        
        console.log(`  - WebP-Version erstellt: ${file.replace('.png', '.webp')}`);
        
        await sharp(filePath)
          .avif({ quality: 70 })
          .toFile(path.join(outputDir, file.replace('.png', '.avif')));
        
        console.log(`  - AVIF-Version erstellt: ${file.replace('.png', '.avif')}`);
        
      } catch (err) {
        console.error(`  - Fehler bei der Optimierung von ${file}:`, err);
      }
    }
    
    console.log('Optimierung abgeschlossen!');
  } catch (error) {
    console.error('Fehler bei der Optimierung:', error);
  }
}

// Führe die Optimierung aus
optimizeAppScreenshots();
