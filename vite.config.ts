
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          
          // Router
          'router': ['react-router-dom'],
          
          // UI Component libraries
          'radix-ui': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-toast', 
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog'
          ],
          
          // Charts (only loaded when needed)
          'charts': ['recharts'],
          
          // Form libraries (only for admin/forms)
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Icons
          'icons': ['lucide-react'],
          
          // Query library
          'query': ['@tanstack/react-query'],
          
          // Date utilities
          'date-utils': ['date-fns'],
          
          // Email service (only for contact)
          'email': ['@emailjs/browser'],
          
          // Rich text editor (only for admin)
          'editor': ['react-quill'],
          
          // Meta tags
          'helmet': ['react-helmet-async']
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        unused: true,
        dead_code: true,
      },
      mangle: true,
    },
    // Enable tree shaking
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
      unknownGlobalSideEffects: false,
    },
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
  },
  css: {
    devSourcemap: mode === 'development',
    // Optimize CSS processing
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@emailjs/browser', 'react-quill'], // Exclude heavy deps that aren't used on every page
  },
}));
