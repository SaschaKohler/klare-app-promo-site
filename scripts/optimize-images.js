const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const QUALITY = 80;
const MAX_WIDTH = 1200;

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
      pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });
    } else if (metadata.format === 'png') {
      pipeline = pipeline.png({ quality: QUALITY, progressive: true });
    } else if (metadata.format === 'webp') {
      pipeline = pipeline.webp({ quality: QUALITY });
    }
    
    // Auch als WebP-Version speichern
    const webpOutputPath = inputPath.replace(/\.(jpe?g|png)$/i, '.webp');
    if (inputPath !== webpOutputPath) {
      await pipeline.clone().webp({ quality: QUALITY }).toFile(webpOutputPath);
      console.log(`Created WebP: ${webpOutputPath}`);
    }
    
    // Original-Format optimiert speichern
    await pipeline.toBuffer().then(data => fs.writeFile(inputPath, data));
    console.log(`Successfully optimized: ${inputPath}`);
    
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
