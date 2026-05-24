import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // ← adiciona
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'coverage/**',
        'src/shared/lib/logger/**',
        'src/shared/config/env.ts'
      ],
      thresholds: {
        lines: 90,
        functions: 90,
        statements: 90,
        branches: 70
      }
    }
  }
});
