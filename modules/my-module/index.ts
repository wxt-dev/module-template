//
// process.env.NPM:
// - `true` when bundled for NPM, and files point to files in the `dist/` directory
// - `false` during development, and files point to source code
//

import "wxt";
import {
  addEntrypoint,
  addPublicAssets,
  addWxtPlugin,
  defineWxtModule,
} from "wxt/modules";
import { resolve } from "node:path";

export interface MyModuleOptions {
  example?: string;
}
declare module "wxt" {
  export interface InlineConfig {
    myModule?: MyModuleOptions;
  }
}

const pluginId = process.env.NPM
  ? "my-module/plugin"
  : resolve(__dirname, "plugin.ts");

export default defineWxtModule<MyModuleOptions>({
  name: "my-module",
  configKey: "myModule",
  imports: [
    // Add an auto-import from your plugin
    { name: "doSomething", from: pluginId },
  ],
  setup(wxt, options) {
    wxt.logger.info("`[my-module]` Options:", options);

    // Add a plugin
    addWxtPlugin(
      wxt,
      resolve(__dirname, process.env.NPM ? "plugin.mjs" : "plugin.ts"),
    );

    // Add prebuilt entrypoints or bundle them with test extension during development
    if (process.env.NPM) {
      addPublicAssets(wxt, resolve(__dirname, "prebuilt"));
    } else {
      addEntrypoint(wxt, {
        type: "unlisted-page",
        name: "example",
        inputPath: resolve(__dirname, "example.html"),
        options: {},
        outputDir: wxt.config.outDir,
        skipped: false,
      });
    }
  },
});
