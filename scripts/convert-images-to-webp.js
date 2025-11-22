#!/usr/bin/env node

/**
 * Image to WebP Converter Script
 * Converts all PNG/JPG/JPEG images to WebP format with optimization
 * 
 * Usage: node scripts/convert-images-to-webp.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  quality: 85, // WebP quality (0-100)
  directories: [
    'src/assets',
    'public',
    'public/lovable-uploads'
  ],
  extensions: ['.png', '.jpg', '.jpeg'],
  skipIfExists: false, // Set to true to skip existing WebP files
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  webpSize: 0,
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
      // Recursively search subdirectories
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
 * Convert image to WebP format
 */
async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');

  // Skip if WebP already exists and skipIfExists is true
  if (CONFIG.skipIfExists && fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipped (exists): ${path.relative(process.cwd(), inputPath)}`);
    stats.skipped++;
    return;
  }

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    stats.originalSize += originalStats.size;

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: CONFIG.quality })
      .toFile(outputPath);

    // Get WebP file size
    const webpStats = fs.statSync(outputPath);
    stats.webpSize += webpStats.size;

    const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
    const originalKB = (originalStats.size / 1024).toFixed(1);
    const webpKB = (webpStats.size / 1024).toFixed(1);

    console.log(
      `✅ ${path.relative(process.cwd(), inputPath)} → ` +
      `${originalKB}KB → ${webpKB}KB (${savings}% savings)`
    );

    stats.processed++;
  } catch (error) {
    console.error(`❌ Failed: ${path.relative(process.cwd(), inputPath)}`, error.message);
    stats.failed++;
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🖼️  WebP Image Conversion Tool\n');
  console.log(`Configuration:`);
  console.log(`  Quality: ${CONFIG.quality}%`);
  console.log(`  Directories: ${CONFIG.directories.join(', ')}`);
  console.log(`  Extensions: ${CONFIG.extensions.join(', ')}\n`);

  // Collect all image files
  let allImages = [];
  CONFIG.directories.forEach(dir => {
    const images = getImageFiles(dir);
    allImages = allImages.concat(images);
  });

  if (allImages.length === 0) {
    console.log('⚠️  No images found to convert.');
    return;
  }

  console.log(`Found ${allImages.length} images to process.\n`);

  // Convert all images
  for (const imagePath of allImages) {
    await convertToWebP(imagePath);
  }

  // Print statistics
  console.log('\n📊 Conversion Statistics:');
  console.log(`  ✅ Processed: ${stats.processed}`);
  console.log(`  ⏭️  Skipped: ${stats.skipped}`);
  console.log(`  ❌ Failed: ${stats.failed}`);
  
  if (stats.processed > 0) {
    const totalOriginalMB = (stats.originalSize / 1024 / 1024).toFixed(2);
    const totalWebPMB = (stats.webpSize / 1024 / 1024).toFixed(2);
    const totalSavings = ((1 - stats.webpSize / stats.originalSize) * 100).toFixed(1);
    
    console.log(`\n💾 Size Comparison:`);
    console.log(`  Original: ${totalOriginalMB} MB`);
    console.log(`  WebP: ${totalWebPMB} MB`);
    console.log(`  Total Savings: ${totalSavings}%`);
    console.log(`  Space Saved: ${(totalOriginalMB - totalWebPMB).toFixed(2)} MB`);
  }

  console.log('\n✨ Conversion complete!\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
