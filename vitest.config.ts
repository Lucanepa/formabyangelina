/// <reference types="vitest/config" />
import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

// Reuses the app's Vite config (incl. the `@` alias). Unit tests only —
// Playwright e2e lives under ./e2e and is excluded here.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.test.{ts,tsx}'],
      exclude: ['e2e/**', 'node_modules/**'],
      css: false,
    },
  }),
)
