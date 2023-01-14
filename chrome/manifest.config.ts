// @ts-expect-error --- Intended
import packageJson from "../package.json";

const manifest: chrome.runtime.Manifest = {
  manifest_version: 3,
  name: "Bookmarker",
  version: packageJson.version,
  icons: {
    "16": "icon/icon-16.png",
    "32": "icon/icon-32.png",
    "48": "icon/icon-48.png",
    "128": "icon/icon-128.png",
  },
  "action": {
    default_popup: "index.html"
  }
};

export default manifest;
