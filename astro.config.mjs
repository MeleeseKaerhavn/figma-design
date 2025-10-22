// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  // ✅ ADD THIS PART
  vite: {
    resolve: {
      alias: {
        "@icons": fileURLToPath(new URL("./src/icons", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
      },
    },
  },
});
