/* eslint-disable no-console */
import * as fs from "fs";
import * as fsExtra from "fs-extra";
import { resolve } from "path";
import { PluginOption } from "vite";

const iconPath = resolve(__dirname, "./icon");
const destPath = resolve(__dirname, "../public/icon");

const copyIcon = (): PluginOption => ({
  name: "create-chrome-manifest",
  buildStart: async () => {
    fsExtra.copy(iconPath, destPath, (err) => {
      if(err){
        console.error("An error occurred while copying icon");
        console.error(err);
        return;
      }

      console.info("✅ Icon Copied Successfully!")
    })
  },
});

export default copyIcon;
