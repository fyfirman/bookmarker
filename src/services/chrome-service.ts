import { Bookmark } from "~/interfaces/bookmark";
import chromeMock from "~/mocks/chrome.mock";
import { env } from "./../utils/env-variable";

let chromeApi = chrome;
if (env.enableMock) {
  // @ts-expect-error --- chrome mock would not be satisfied chrome API
  chromeApi = chromeMock;
}

const getBookmarks = async (): Promise<Bookmark[]> => {
  const tree = await chromeApi.bookmarks.getTree();

  return tree;
};

const chromeService = {
  getBookmarks,
};

export default chromeService;
