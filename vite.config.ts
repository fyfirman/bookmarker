import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from 'path';
import createManifest from "./chrome/create-manifest";
import copyIcon from "./chrome/copy-icon";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '~' : path.resolve(__dirname, './src')
    },
  },
  plugins: [createManifest(), copyIcon(), react()],
  build: {
    rollupOptions: {
      input: [
        path.resolve(__dirname, "./index.html"),
        path.resolve(__dirname, "./src/scripts/background-sw.ts"),
      ],
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
