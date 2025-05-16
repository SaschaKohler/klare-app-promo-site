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
        // PNG optimieren
        await sharp(filePath)
          .resize(280, 580, { 
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
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
        
        // Auch WebP-Version erstellen für moderne Browser
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, file.replace('.png', '.webp')));
        
        console.log(`  - WebP-Version erstellt: ${file.replace('.png', '.webp')}`);
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
