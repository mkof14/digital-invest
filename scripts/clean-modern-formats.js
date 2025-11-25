const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  directories: [
    'src/assets',
    'src/assets/projects',
    'src/assets/team',
    'public/lovable-uploads'
  ],
  extensions: ['.webp', '.avif']
};

let deletedCount = 0;
let totalSize = 0;

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
 * Delete modern format files recursively
 */
function cleanModernFormats(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      cleanModernFormats(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        const size = stat.size;
        fs.unlinkSync(filePath);
        deletedCount++;
        totalSize += size;
        console.log(`🗑️  Deleted: ${filePath}`);
      }
    }
  });
}

/**
 * Main execution
 */
function main() {
  console.log('🧹 Cleaning Modern Image Formats (WebP & AVIF)\n');

  CONFIG.directories.forEach(dir => {
    cleanModernFormats(dir);
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 Cleanup Summary:');
  console.log('='.repeat(60));
  console.log(`🗑️  Files deleted: ${deletedCount}`);
  console.log(`💾 Space freed: ${formatBytes(totalSize)}`);
  console.log('='.repeat(60));
  console.log('✨ Cleanup complete!');
}

// Run the script
try {
  main();
} catch (error) {
  console.error('❌ Fatal error:', error);
  process.exit(1);
}
