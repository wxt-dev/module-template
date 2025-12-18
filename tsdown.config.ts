import { defineConfig } from "tsdown";
import * as vite from "vite";

const basePath = "modules/my-module";

export default defineConfig({
  entry: {
    index: `${basePath}/index.ts`,
    plugin: `${basePath}/plugin.ts`,
  },
  define: {
    "process.env.NPM": "true",
  },
  onSuccess: prebuildEntrypoints,
});

// Prebuild entrypoints
async function prebuildEntrypoints() {
  await vite.build({
    root: basePath,
    build: {
      emptyOutDir: false,
      rollupOptions: {
        input: `${basePath}/example.html`,
        output: {
          dir: "dist/prebuilt",
        },
      },
    },
  });
}
