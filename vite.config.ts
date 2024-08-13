import { defineConfig } from "vite"; // when testing use "vitest/config", when build use "vite"
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  // when testing, uncomment following lines. Comment for deploy
  /*  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.ts",
    css: true,
  }, */
});
