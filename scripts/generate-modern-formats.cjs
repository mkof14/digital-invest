const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  quality: {
    webp: 85,
    avif: 80
  },
  directories: [
    'src/assets',
    'src/assets/projects',
    'src/assets/team',
    'public/lovable-uploads'
  ],
  extensions: ['.jpg', '.jpeg', '.png'],
  skipIfExists: true, // Skip if WebP/AVIF already exists
  formats: ['webp', 'avif'] // Formats to generate
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  webpSize: 0,
  avifSize: 0
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Convert image to modern formats
 */
async function convertImage(inputPath) {
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const baseName = path.basename(inputPath, ext);
  const webpPath = path.join(dir, `${baseName}.webp`);
  const avifPath = path.join(dir, `${baseName}.avif`);

  try {
    // Check if conversions already exist
    const webpExists = fs.existsSync(webpPath);
    const avifExists = fs.existsSync(avifPath);

    if (CONFIG.skipIfExists && webpExists && avifExists) {
      console.log(`⏭️  Skipped (already exists): ${inputPath}`);
      stats.skipped++;
      return;
    }

    const originalSize = getFileSize(inputPath);
    stats.originalSize += originalSize;

    console.log(`\n🔄 Converting: ${inputPath}`);
    console.log(`   Original size: ${formatBytes(originalSize)}`);

    const image = sharp(inputPath);

    // Generate WebP
    if (CONFIG.formats.includes('webp') && !webpExists) {
      await image
        .clone()
        .webp({ quality: CONFIG.quality.webp })
        .toFile(webpPath);

      const webpSize = getFileSize(webpPath);
      stats.webpSize += webpSize;
      const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      console.log(`   ✅ WebP: ${formatBytes(webpSize)} (${savings}% smaller)`);
    }

    // Generate AVIF
    if (CONFIG.formats.includes('avif') && !avifExists) {
      await image
        .clone()
        .avif({ quality: CONFIG.quality.avif })
        .toFile(avifPath);

      const avifSize = getFileSize(avifPath);
      stats.avifSize += avifSize;
      const savings = ((1 - avifSize / originalSize) * 100).toFixed(1);
      console.log(`   ✅ AVIF: ${formatBytes(avifSize)} (${savings}% smaller)`);
    }

    stats.processed++;
  } catch (error) {
    console.error(`   ❌ Failed to convert ${inputPath}:`, error.message);
    stats.failed++;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Modern Image Format Generation\n');
  console.log('Configuration:');
  console.log(`  - WebP Quality: ${CONFIG.quality.webp}`);
  console.log(`  - AVIF Quality: ${CONFIG.quality.avif}`);
  console.log(`  - Formats: ${CONFIG.formats.join(', ')}`);
  console.log(`  - Skip existing: ${CONFIG.skipIfExists}`);
  console.log(`  - Directories: ${CONFIG.directories.join(', ')}\n`);

  // Collect all image files
  const allImages = [];
  CONFIG.directories.forEach(dir => {
    const images = getImageFiles(dir);
    allImages.push(...images);
  });

  console.log(`📁 Found ${allImages.length} images to process\n`);

  if (allImages.length === 0) {
    console.log('⚠️  No images found to convert');
    return;
  }

  // Convert all images
  for (const imagePath of allImages) {
    await convertImage(imagePath);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Conversion Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Successfully processed: ${stats.processed}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);
  console.log(`❌ Failed: ${stats.failed}`);
  console.log(`📦 Total original size: ${formatBytes(stats.originalSize)}`);
  
  if (stats.webpSize > 0) {
    const webpSavings = ((1 - stats.webpSize / stats.originalSize) * 100).toFixed(1);
    console.log(`🎯 Total WebP size: ${formatBytes(stats.webpSize)} (${webpSavings}% smaller)`);
  }
  
  if (stats.avifSize > 0) {
    const avifSavings = ((1 - stats.avifSize / stats.originalSize) * 100).toFixed(1);
    console.log(`🎯 Total AVIF size: ${formatBytes(stats.avifSize)} (${avifSavings}% smaller)`);
  }

  const totalModernSize = stats.webpSize + stats.avifSize;
  if (totalModernSize > 0) {
    const totalSavings = stats.originalSize - (totalModernSize / CONFIG.formats.length);
    console.log(`💾 Estimated bandwidth savings: ${formatBytes(totalSavings)} per load cycle`);
  }

  console.log('='.repeat(60));
  console.log('✨ Modern image generation complete!');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
