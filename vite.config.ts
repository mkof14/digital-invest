import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime", "@tanstack/react-query"],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    // Strip console.log/debugger in production for smaller, faster JS.
    // Note: console.warn/console.error are preserved.
    cssMinify: 'esbuild',
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs', '@radix-ui/react-tooltip', '@radix-ui/react-accordion'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-supabase': ['@supabase/supabase-js'],
          'vendor-charts': ['recharts'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-http-backend', 'i18next-browser-languagedetector'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  esbuild: mode === 'production'
    ? { drop: ['console', 'debugger'], legalComments: 'none' }
    : undefined,
}));
