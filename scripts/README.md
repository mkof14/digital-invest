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

### 1. Convert Images to WebP

Converts all PNG/JPG/JPEG images to WebP format with optimization.

**Usage:**
```bash
node scripts/convert-images-to-webp.js
```

**What it does:**
- Scans `src/assets`, `public`, and `public/lovable-uploads`
- Converts all PNG, JPG, JPEG images to WebP
- Creates `.webp` files alongside originals
- Quality: 85% (configurable)
- Shows size savings statistics

**Example output:**
```
✅ src/assets/hero.jpg → 450.2KB → 180.5KB (59.9% savings)
✅ public/logo.png → 85.3KB → 28.1KB (67.1% savings)

📊 Total Savings: 63.2%
💾 Space Saved: 327.4KB
```

### 2. Optimize Existing Images

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

**Example output:**
```
✅ src/assets/hero.jpg → 450.2KB → 360.8KB (19.9% savings)
⏭️  No improvement: public/logo.png

📊 Optimized: 15 files
💾 Space Saved: 1.2 MB
```

## Configuration

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

### Before Launch (One-time)

1. **Backup everything:**
   ```bash
   git commit -am "Before image optimization"
   ```

2. **Optimize existing images:**
   ```bash
   node scripts/optimize-images.js
   ```

3. **Convert to WebP:**
   ```bash
   node scripts/convert-images-to-webp.js
   ```

4. **Update code to use WebP:**
   Replace `<img>` tags with `<OptimizedImage>` component:
   ```tsx
   import OptimizedImage from '@/components/OptimizedImage';
   
   <OptimizedImage
     src="/assets/hero.jpg"
     webpSrc="/assets/hero.webp"
     alt="Hero image"
   />
   ```

5. **Test and commit:**
   ```bash
   npm run build
   git add .
   git commit -m "Optimize and convert images to WebP"
   ```

### For New Images

1. Add new image to appropriate folder
2. Run conversion script:
   ```bash
   node scripts/convert-images-to-webp.js
   ```
3. Use OptimizedImage component with webpSrc prop

## Cleanup Commands

Remove backup files after verifying optimization:
```bash
# Unix/Mac/Linux
find . -name "*.backup" -delete

# Windows PowerShell
Get-ChildItem -Recurse -Filter "*.backup" | Remove-Item
```

Remove WebP files (if needed):
```bash
# Unix/Mac/Linux
find . -name "*.webp" -delete

# Windows PowerShell
Get-ChildItem -Recurse -Filter "*.webp" | Remove-Item
```

## Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Image Size | ~5-8 MB | ~1.5-2.5 MB | 60-70% |
| Hero Image Load | 450 KB | 180 KB | 60% |
| Logo Load | 85 KB | 28 KB | 67% |
| Page Load Time | 3.5s | 1.8s | 49% |

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
- WebP support: 95%+ browsers (all modern browsers)
- Fallback to original format automatic via OptimizedImage component
- Scripts are safe to run multiple times
- Processing time: ~1-2 seconds per image

## Additional Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Image Format](https://developers.google.com/speed/webp)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
