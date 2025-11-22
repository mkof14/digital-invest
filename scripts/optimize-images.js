#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses existing images without format conversion
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  directories: [
    'src/assets',
    'public',
    'public/lovable-uploads'
  ],
  png: {
    quality: 85,
    compressionLevel: 9,
  },
  jpeg: {
    quality: 85,
    mozjpeg: true,
  },
  createBackup: true, // Create .backup files before optimization
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  optimizedSize: 0,
};

/**
 * Get all image files from a directory recursively
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
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Optimize image in place
 */
async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const backupPath = `${inputPath}.backup`;

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    
    // Skip if backup exists (already optimized)
    if (fs.existsSync(backupPath)) {
      console.log(`⏭️  Skipped (already optimized): ${path.relative(process.cwd(), inputPath)}`);
      stats.skipped++;
      return;
    }

    stats.originalSize += originalStats.size;

    // Create backup if enabled
    if (CONFIG.createBackup) {
      fs.copyFileSync(inputPath, backupPath);
    }

    // Optimize based on format
    const tempPath = `${inputPath}.temp`;
    
    if (ext === '.png') {
      await sharp(inputPath)
        .png({
          quality: CONFIG.png.quality,
          compressionLevel: CONFIG.png.compressionLevel,
        })
        .toFile(tempPath);
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      await sharp(inputPath)
        .jpeg({
          quality: CONFIG.jpeg.quality,
          mozjpeg: CONFIG.jpeg.mozjpeg,
        })
        .toFile(tempPath);
    }

    // Replace original with optimized
    fs.renameSync(tempPath, inputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(inputPath);
    stats.optimizedSize += optimizedStats.size;

    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    const originalKB = (originalStats.size / 1024).toFixed(1);
    const optimizedKB = (optimizedStats.size / 1024).toFixed(1);

    if (optimizedStats.size < originalStats.size) {
      console.log(
        `✅ ${path.relative(process.cwd(), inputPath)} → ` +
        `${originalKB}KB → ${optimizedKB}KB (${savings}% savings)`
      );
    } else {
      // Restore from backup if optimization made it bigger
      fs.copyFileSync(backupPath, inputPath);
      fs.unlinkSync(backupPath);
      console.log(`⏭️  No improvement: ${path.relative(process.cwd(), inputPath)}`);
      stats.skipped++;
      return;
    }

    stats.processed++;
  } catch (error) {
    console.error(`❌ Failed: ${path.relative(process.cwd(), inputPath)}`, error.message);
    
    // Restore from backup on error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, inputPath);
    }
    stats.failed++;
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🗜️  Image Optimization Tool\n');
  console.log(`Configuration:`);
  console.log(`  PNG Quality: ${CONFIG.png.quality}%`);
  console.log(`  JPEG Quality: ${CONFIG.jpeg.quality}%`);
  console.log(`  Create Backups: ${CONFIG.createBackup ? 'Yes' : 'No'}`);
  console.log(`  Directories: ${CONFIG.directories.join(', ')}\n`);

  // Collect all image files
  let allImages = [];
  CONFIG.directories.forEach(dir => {
    const images = getImageFiles(dir);
    allImages = allImages.concat(images);
  });

  if (allImages.length === 0) {
    console.log('⚠️  No images found to optimize.');
    return;
  }

  console.log(`Found ${allImages.length} images to optimize.\n`);

  // Optimize all images
  for (const imagePath of allImages) {
    await optimizeImage(imagePath);
  }

  // Print statistics
  console.log('\n📊 Optimization Statistics:');
  console.log(`  ✅ Optimized: ${stats.processed}`);
  console.log(`  ⏭️  Skipped: ${stats.skipped}`);
  console.log(`  ❌ Failed: ${stats.failed}`);
  
  if (stats.processed > 0) {
    const totalOriginalMB = (stats.originalSize / 1024 / 1024).toFixed(2);
    const totalOptimizedMB = (stats.optimizedSize / 1024 / 1024).toFixed(2);
    const totalSavings = ((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1);
    
    console.log(`\n💾 Size Comparison:`);
    console.log(`  Original: ${totalOriginalMB} MB`);
    console.log(`  Optimized: ${totalOptimizedMB} MB`);
    console.log(`  Total Savings: ${totalSavings}%`);
    console.log(`  Space Saved: ${(totalOriginalMB - totalOptimizedMB).toFixed(2)} MB`);
  }

  if (CONFIG.createBackup && stats.processed > 0) {
    console.log(`\n💡 Tip: Original files backed up with .backup extension`);
    console.log(`   To remove backups: find . -name "*.backup" -delete`);
  }

  console.log('\n✨ Optimization complete!\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
