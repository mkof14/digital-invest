import { Plugin } from 'vite';
import { execSync } from 'child_process';
import path from 'path';

interface ModernImagesPluginOptions {
  /**
   * Enable/disable the plugin
   * @default true in production, false in development
   */
  enabled?: boolean;
  
  /**
   * Run conversion before build
   * @default true
   */
  runOnBuild?: boolean;
  
  /**
   * Watch mode - regenerate on file changes
   * @default false
   */
  watch?: boolean;
}

/**
 * Vite plugin to automatically generate WebP and AVIF versions of images
 */
export default function modernImagesPlugin(
  options: ModernImagesPluginOptions = {}
): Plugin {
  const {
    enabled = process.env.NODE_ENV === 'production',
    runOnBuild = true,
    watch = false
  } = options;

  let hasRun = false;

  const runConversion = () => {
    if (hasRun && !watch) {
      return;
    }

    try {
      console.log('\n🖼️  Generating modern image formats...');
      const scriptPath = path.resolve(__dirname, 'scripts/generate-modern-formats.cjs');
      execSync(`node "${scriptPath}"`, { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      hasRun = true;
      console.log('✅ Modern image formats generated successfully\n');
    } catch (error) {
      console.error('❌ Failed to generate modern image formats:', error);
      // Don't fail the build, just warn
      console.warn('⚠️  Build will continue without modern image formats');
    }
  };

  return {
    name: 'vite-plugin-modern-images',
    
    // Run before build starts
    buildStart() {
      if (enabled && runOnBuild) {
        runConversion();
      }
    },

    // Watch for image changes in dev mode
    configureServer(server) {
      if (enabled && watch) {
        server.watcher.on('add', (file) => {
          if (/\.(jpg|jpeg|png)$/i.test(file)) {
            console.log(`\n📸 New image detected: ${file}`);
            runConversion();
          }
        });
      }
    }
  };
}
