import getBookmarkTreeResponse from "./responses/get-bookmarks.json";

const chromeMock = {
  bookmarks: {
    getTree: () => Promise.resolve(getBookmarkTreeResponse),
  } as typeof chrome.bookmarks,
} satisfies Partial<typeof chrome>;

export default chromeMock;
