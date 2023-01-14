/* eslint-disable no-console */
import * as fs from "fs";
import { resolve } from "path";
import { PluginOption } from "vite";
import manifest from "./manifest.config";

const outDir = resolve(__dirname, "../dist");

const createManifest = (): PluginOption => ({
  name: "create-chrome-manifest",
  buildStart: async () => {
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    const manifestPath = resolve(__dirname, "../public/manifest.json");

    const data = new Uint8Array(Buffer.from(JSON.stringify(manifest, null, 2)));
    fs.writeFile(manifestPath, data, (err) => {
      if (err) throw err;
      console.info("✅ Manifest created");
    });
  },
});

export default createManifest;
