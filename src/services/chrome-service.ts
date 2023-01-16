import { Bookmark } from "~/interfaces/bookmark";

const getBookmarks = async (): Promise<Bookmark[]> => {
  const tree = await chrome.bookmarks.getTree();

  return tree;
};

const chromeService = {
  getBookmarks,
};

export default chromeService;
