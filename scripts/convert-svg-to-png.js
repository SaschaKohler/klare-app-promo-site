const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Pfad zu den SVGs
const svgDir = path.join(__dirname, '../public/klare-svg');
// Ausgabeverzeichnis für PNGs
const pngDir = path.join(__dirname, '../public/klare-png');

// Stelle sicher, dass das Ausgabeverzeichnis existiert
if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

async function convertSvgToPng() {
  try {
    // Alle SVG-Dateien lesen
    const files = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));
    
    console.log(`Gefundene SVG-Dateien: ${files.join(', ')}`);
    
    // Für jede SVG-Datei
    for (const file of files) {
      const svgPath = path.join(svgDir, file);
      const pngPath = path.join(pngDir, file.replace('.svg', '.png'));
      
      console.log(`Konvertiere ${svgPath} zu ${pngPath}`);
      
      // SVG-Inhalt lesen
      const svgBuffer = fs.readFileSync(svgPath);
      
      // Für verschiedene Größen konvertieren (1x, 2x, 3x)
      const sizes = [36, 72, 144];
      
      for (const size of sizes) {
        try {
          // SVG zu PNG konvertieren
          const buffer = await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toBuffer();
          
          // Dateinamen mit Größensuffix (außer für 1x)
          const sizeSuffix = size === 36 ? '' : `@${size/36}x`;
          const outputPath = path.join(pngDir, file.replace('.svg', `${sizeSuffix}.png`));
          
          // PNG speichern
          fs.writeFileSync(outputPath, buffer);
          console.log(`  - Erstellt: ${outputPath}`);
        } catch (err) {
          console.error(`  - Fehler bei Größe ${size}:`, err);
        }
      }
    }
    
    console.log('Konvertierung abgeschlossen!');
  } catch (error) {
    console.error('Fehler bei der Konvertierung:', error);
  }
}

// Führe die Konvertierung aus
convertSvgToPng();
