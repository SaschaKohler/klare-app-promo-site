const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const QUALITY = 80;
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 75; // Leicht niedrigere Qualität für WebP, da Format effizienter ist

async function generatePlaceholder(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(20) // Tiny version for placeholder
      .blur(10)
      .toBuffer()
      .then(async (data) => {
        // Convert to base64
        const base64 = `data:image/png;base64,${data.toString('base64')}`;
        // Write to a small JS file that can be imported
        await fs.writeFile(
          outputPath, 
          `export default "${base64}";`
        );
      });
    return true;
  } catch (error) {
    console.error(`Error generating placeholder for ${inputPath}:`, error);
    return false;
  }
}

async function optimizeImage(inputPath) {
  console.log(`Optimizing: ${inputPath}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Nur redimensionieren, wenn das Bild größer als MAX_WIDTH ist
    const shouldResize = metadata.width > MAX_WIDTH;
    
    let pipeline = image;
    
    if (shouldResize) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }
    
    // Immer optimieren
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true });
    } else if (metadata.format === 'png') {
      pipeline = pipeline.png({ quality: QUALITY, progressive: true, compressionLevel: 9, adaptiveFiltering: true });
    } else if (metadata.format === 'webp') {
      pipeline = pipeline.webp({ quality: QUALITY });
    }
    
    // Als WebP-Version speichern
    const webpOutputPath = inputPath.replace(/\.(jpe?g|png)$/i, '.webp');
    if (inputPath !== webpOutputPath) {
      await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(webpOutputPath);
      console.log(`Created WebP: ${webpOutputPath}`);
    }
    
    // Als AVIF-Version speichern (nur für Bilder > 100KB, da Prozess rechenintensiv)
    const stats = await fs.stat(inputPath);
    if (stats.size > 100 * 1024) {
      const avifOutputPath = inputPath.replace(/\.(jpe?g|png)$/i, '.avif');
      if (inputPath !== avifOutputPath) {
        await pipeline.clone().avif({ quality: QUALITY - 10 }).toFile(avifOutputPath);
        console.log(`Created AVIF: ${avifOutputPath}`);
      }
    }
    
    // Original-Format optimiert speichern
    await pipeline.toBuffer().then(data => fs.writeFile(inputPath, data));
    console.log(`Successfully optimized: ${inputPath}`);
    
    // Für Blog-Bilder auch Placeholders erstellen
    if (inputPath.includes('/blog/')) {
      const dir = path.dirname(inputPath);
      const basename = path.basename(inputPath, path.extname(inputPath));
      const placeholderPath = path.join(dir, `${basename}-placeholder.js`);
      await generatePlaceholder(inputPath, placeholderPath);
      console.log(`Created placeholder: ${placeholderPath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    return false;
  }
}

async function processDirectory() {
  const publicDir = path.join(__dirname, '..', 'public');
  const imagePatterns = [
    path.join(publicDir, 'images', '**', '*.{jpg,jpeg,png}'),
    path.join(publicDir, 'klare-svg', '*.svg'),
  ];
  
  for (const pattern of imagePatterns) {
    const files = glob.sync(pattern);
    console.log(`Found ${files.length} files for pattern: ${pattern}`);
    
    // SVGs nicht optimieren, nur Bilder
    const imagesToOptimize = files.filter(file => !file.endsWith('.svg'));
    
    if (imagesToOptimize.length > 0) {
      console.log(`Optimizing ${imagesToOptimize.length} images...`);
      const results = await Promise.all(imagesToOptimize.map(optimizeImage));
      const successful = results.filter(Boolean).length;
      console.log(`Successfully optimized ${successful} of ${imagesToOptimize.length} images.`);
    }
  }
}

processDirectory().catch(console.error);
