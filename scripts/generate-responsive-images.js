import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Directories to scan for images
  directories: [
    path.join(__dirname, '..', 'src', 'assets'),
    path.join(__dirname, '..', 'public', 'lovable-uploads')
  ],
  
  // Responsive sizes to generate (in pixels)
  sizes: [400, 800, 1200, 1600],
  
  // Image quality settings
  quality: {
    webp: 85,
    avif: 80,
    jpeg: 85
  },
  
  // File extensions to process
  extensions: ['.jpg', '.jpeg', '.png'],
  
  // Skip if responsive versions already exist
  skipIfExists: true
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  failed: 0,
  totalOriginalSize: 0,
  totalGeneratedSize: 0
};

/**
 * Get all image files recursively
 */
async function getImageFiles(dir, fileList = []) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        await getImageFiles(filePath, fileList);
      } else {
        const ext = path.extname(file.name).toLowerCase();
        if (CONFIG.extensions.includes(ext)) {
          fileList.push(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fileList;
}

/**
 * Generate responsive versions of an image
 */
async function generateResponsiveVersions(inputPath) {
  try {
    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const baseName = path.basename(inputPath, ext);
    
    // Get original image info
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const originalSize = (await fs.stat(inputPath)).size;
    
    console.log(`\n📸 Processing: ${path.basename(inputPath)}`);
    console.log(`   Original: ${metadata.width}x${metadata.height} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    stats.totalOriginalSize += originalSize;
    
    // Generate responsive sizes
    for (const width of CONFIG.sizes) {
      // Skip if image is smaller than target width
      if (metadata.width < width) {
        console.log(`   ⏭️  Skipping ${width}w (original is smaller)`);
        continue;
      }
      
      // Generate WebP
      const webpPath = path.join(dir, `${baseName}-${width}w.webp`);
      if (CONFIG.skipIfExists && await fileExists(webpPath)) {
        console.log(`   ⏭️  Skipping ${width}w WebP (exists)`);
        stats.skipped++;
      } else {
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: CONFIG.quality.webp })
          .toFile(webpPath);
        
        const webpSize = (await fs.stat(webpPath)).size;
        stats.totalGeneratedSize += webpSize;
        console.log(`   ✅ Generated ${width}w WebP (${(webpSize / 1024).toFixed(2)} KB)`);
      }
      
      // Generate AVIF
      const avifPath = path.join(dir, `${baseName}-${width}w.avif`);
      if (CONFIG.skipIfExists && await fileExists(avifPath)) {
        console.log(`   ⏭️  Skipping ${width}w AVIF (exists)`);
        stats.skipped++;
      } else {
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .avif({ quality: CONFIG.quality.avif })
          .toFile(avifPath);
        
        const avifSize = (await fs.stat(avifPath)).size;
        stats.totalGeneratedSize += avifSize;
        console.log(`   ✅ Generated ${width}w AVIF (${(avifSize / 1024).toFixed(2)} KB)`);
      }
      
      // Generate JPEG for fallback (only for non-JPEG originals)
      if (ext.toLowerCase() !== '.jpg' && ext.toLowerCase() !== '.jpeg') {
        const jpegPath = path.join(dir, `${baseName}-${width}w.jpg`);
        if (CONFIG.skipIfExists && await fileExists(jpegPath)) {
          console.log(`   ⏭️  Skipping ${width}w JPEG (exists)`);
          stats.skipped++;
        } else {
          await sharp(inputPath)
            .resize(width, null, { withoutEnlargement: true })
            .jpeg({ quality: CONFIG.quality.jpeg })
            .toFile(jpegPath);
          
          const jpegSize = (await fs.stat(jpegPath)).size;
          stats.totalGeneratedSize += jpegSize;
          console.log(`   ✅ Generated ${width}w JPEG (${(jpegSize / 1024).toFixed(2)} KB)`);
        }
      }
    }
    
    stats.processed++;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    stats.failed++;
  }
}

/**
 * Check if file exists
 */
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Responsive Image Generation\n');
  console.log('📋 Configuration:');
  console.log(`   Directories: ${CONFIG.directories.length}`);
  console.log(`   Sizes: ${CONFIG.sizes.join('w, ')}w`);
  console.log(`   Quality: WebP ${CONFIG.quality.webp}, AVIF ${CONFIG.quality.avif}, JPEG ${CONFIG.quality.jpeg}`);
  console.log(`   Skip existing: ${CONFIG.skipIfExists}\n`);
  
  // Collect all image files
  const allImages = [];
  for (const dir of CONFIG.directories) {
    const images = await getImageFiles(dir);
    allImages.push(...images);
  }
  
  console.log(`📦 Found ${allImages.length} images to process\n`);
  console.log('=' .repeat(60));
  
  // Process each image
  for (const imagePath of allImages) {
    await generateResponsiveVersions(imagePath);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Generation Summary:');
  console.log(`   ✅ Processed: ${stats.processed} images`);
  console.log(`   ⏭️  Skipped: ${stats.skipped} files (already exist)`);
  console.log(`   ❌ Failed: ${stats.failed} images`);
  console.log(`\n💾 Size Statistics:`);
  console.log(`   Original total: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Generated total: ${(stats.totalGeneratedSize / 1024 / 1024).toFixed(2)} MB`);
  
  if (stats.totalOriginalSize > 0) {
    const savings = ((1 - stats.totalGeneratedSize / stats.totalOriginalSize) * 100).toFixed(1);
    console.log(`   Average savings: ${savings}%`);
  }
  
  console.log('\n✨ Done! Responsive images generated successfully.\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
