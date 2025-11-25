# Image Optimization Scripts

Automated scripts for optimizing and converting images in the Digital Invest project.

## Prerequisites

Install Sharp (Node.js image processing library):

```bash
npm install --save-dev sharp
# or
yarn add --dev sharp
```

## Scripts

### 1. Generate Modern Image Formats (WebP & AVIF) 🆕 RECOMMENDED

Automatically converts PNG/JPG/JPEG images to modern WebP and AVIF formats for optimal performance.

**Usage:**
```bash
node scripts/generate-modern-formats.js
```

**What it does:**
- Scans `src/assets`, `public`, and `public/lovable-uploads`
- Converts all PNG, JPG, JPEG images to WebP and AVIF
- Creates `.webp` and `.avif` files alongside originals
- Quality: WebP 85%, AVIF 80% (configurable)
- Shows detailed size savings statistics
- Skips already converted files (optional)

**Example output:**
```
🚀 Starting Modern Image Format Generation
📁 Found 20 images to process

🔄 Converting: src/assets/projects/biomathlife-hero.jpg
   Original size: 845 KB
   ✅ WebP: 234 KB (72.3% smaller)
   ✅ AVIF: 178 KB (78.9% smaller)

📊 Conversion Summary:
✅ Successfully processed: 20
📦 Total original size: 15.4 MB
🎯 Total WebP size: 4.2 MB (72.7% smaller)
🎯 Total AVIF size: 3.1 MB (79.9% smaller)
💾 Estimated bandwidth savings: 11.2 MB per load cycle
```

### 2. Clean Modern Formats 🆕

Removes all generated WebP and AVIF files.

**Usage:**
```bash
node scripts/clean-modern-formats.js
```

**What it does:**
- Removes all `.webp` and `.avif` files
- Shows statistics on deleted files and freed space
- Safe to run (only removes generated formats)

**Example output:**
```
🧹 Cleaning Modern Image Formats (WebP & AVIF)
🗑️  Deleted: src/assets/projects/biomathlife-hero.webp
🗑️  Deleted: src/assets/projects/biomathlife-hero.avif

📊 Cleanup Summary:
🗑️  Files deleted: 40
💾 Space freed: 7.3 MB
```

### 3. Convert Images to WebP (Legacy)

Converts all PNG/JPG/JPEG images to WebP format with optimization.

**Usage:**
```bash
node scripts/convert-images-to-webp.js
```

**Note:** Consider using `generate-modern-formats.js` instead for both WebP and AVIF support.

### 4. Optimize Existing Images

Compresses existing images without changing format.

**Usage:**
```bash
node scripts/optimize-images.js
```

**What it does:**
- Optimizes PNG and JPEG images in place
- Creates `.backup` files before optimization
- PNG: 85% quality, compression level 9
- JPEG: 85% quality, MozJPEG enabled
- Skips if optimization makes file larger

## Configuration

### generate-modern-formats.js 🆕

```javascript
const CONFIG = {
  quality: {
    webp: 85,              // WebP quality (0-100)
    avif: 80               // AVIF quality (0-100)
  },
  directories: [           // Directories to scan
    'src/assets',
    'src/assets/projects',
    'src/assets/team',
    'public/lovable-uploads'
  ],
  extensions: [            // Image formats to convert
    '.jpg', '.jpeg', '.png'
  ],
  skipIfExists: true,      // Skip if WebP/AVIF already exists
  formats: ['webp', 'avif'] // Formats to generate
};
```

### convert-images-to-webp.js

```javascript
const CONFIG = {
  quality: 85,              // WebP quality (0-100)
  directories: [            // Directories to scan
    'src/assets',
    'public',
    'public/lovable-uploads'
  ],
  extensions: [             // Image formats to convert
    '.png', '.jpg', '.jpeg'
  ],
  skipIfExists: false,      // Skip if WebP already exists
};
```

### optimize-images.js

```javascript
const CONFIG = {
  directories: [            // Directories to scan
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
  createBackup: true,       // Create .backup files
};
```

## Recommended Workflow

### Before Launch (One-time) - UPDATED 🆕

1. **Backup everything:**
   ```bash
   git commit -am "Before image optimization"
   ```

2. **Optimize existing images (optional):**
   ```bash
   node scripts/optimize-images.js
   ```

3. **Generate modern formats (WebP + AVIF):**
   ```bash
   node scripts/generate-modern-formats.js
   ```

4. **Update code to use modern formats:**
   The `OptimizedImage` component automatically uses WebP/AVIF:
   ```tsx
   import OptimizedImage from '@/components/OptimizedImage';
   import { shimmerDataURL } from '@/lib/imageUtils';
   
   <OptimizedImage
     src="/assets/hero.jpg"
     webpSrc="/assets/hero.webp"
     avifSrc="/assets/hero.avif"
     blurDataURL={shimmerDataURL(400, 300)}
     alt="Hero image"
   />
   ```

5. **Test and commit:**
   ```bash
   npm run build
   git add .
   git commit -m "Add modern image formats (WebP & AVIF)"
   ```

### For New Images

1. Add new image to appropriate folder
2. Run conversion script:
   ```bash
   node scripts/generate-modern-formats.js
   ```
3. Use OptimizedImage component with webpSrc and avifSrc props

### Automated Build Integration 🆕

The generation is automatically integrated into the build process via Vite plugin:
- Runs automatically during production builds
- Configure in `vite.config.ts`
- No manual intervention needed for deployments

## Cleanup Commands

Remove backup files after verifying optimization:
```bash
# Unix/Mac/Linux
find . -name "*.backup" -delete

# Windows PowerShell
Get-ChildItem -Recurse -Filter "*.backup" | Remove-Item
```

Remove WebP and AVIF files (if needed):
```bash
# Using the clean script (RECOMMENDED)
node scripts/clean-modern-formats.js

# Or manually:
# Unix/Mac/Linux
find . -name "*.webp" -delete
find . -name "*.avif" -delete

# Windows PowerShell
Get-ChildItem -Recurse -Filter "*.webp" | Remove-Item
Get-ChildItem -Recurse -Filter "*.avif" | Remove-Item
```

## Expected Results

| Metric | Before | After (WebP+AVIF) | Improvement |
|--------|--------|-------------------|-------------|
| Total Image Size | ~15-20 MB | ~4-6 MB | 70-80% |
| Hero Image Load | 845 KB | 178 KB (AVIF) | 79% |
| Project Page Load | 3.5s | 1.2s | 66% |
| Lighthouse Score | 65 | 92 | +27 points |

### Browser Support

| Format | Chrome | Firefox | Safari | Edge |
|--------|--------|---------|--------|------|
| WebP   | ✅ 23+ | ✅ 65+  | ✅ 14+ | ✅ 18+ |
| AVIF   | ✅ 85+ | ✅ 93+  | 🟨 16+ | ✅ 85+ |
| Fallback| ✅ All | ✅ All  | ✅ All | ✅ All |

Note: OptimizedImage component automatically falls back to JPEG/PNG for unsupported browsers.

## Troubleshooting

### Error: "Cannot find module 'sharp'"
```bash
npm install --save-dev sharp
```

### Error: "EACCES: permission denied"
```bash
chmod +x scripts/*.js
```

### Images look worse after optimization
- Increase quality setting in CONFIG
- WebP quality 85-95 recommended
- JPEG quality 80-90 recommended

### Script skips all images
- Check if `.backup` or `.webp` files already exist
- Set `skipIfExists: false` to force re-conversion
- Delete existing converted files first

## Notes

- Original files are preserved (unless using optimize-images.js)
- WebP support: 97%+ browsers (all modern browsers)
- AVIF support: 85%+ browsers (Chrome 85+, Firefox 93+, Safari 16+)
- Automatic fallback to original format via OptimizedImage component
- Scripts are safe to run multiple times
- Processing time: ~1-2 seconds per image
- **NEW:** Automated generation during production builds via Vite plugin
- **NEW:** Clean script available for removing generated formats

## Additional Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Image Format](https://developers.google.com/speed/webp)
- [AVIF Image Format](https://jakearchibald.com/2020/avif-has-landed/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
- [Modern Image Formats Guide](../MODERN_IMAGE_FORMATS_GUIDE.md)
- [Quick Start Guide](../QUICK_START_IMAGES.md)
