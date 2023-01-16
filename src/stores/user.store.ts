import { Bookmark } from "~/interfaces/bookmark";
import createStore from "~/libs/create-store";
import deepFlatten from "~/libs/deep-flatten";

interface BookmarkState {
  bookmarks: Bookmark[];
  getFlattenBookmarks: () => Bookmark[];
}

export const useBookmarkStore = createStore<BookmarkState>(
  "Bookmark",
  (_, get) => ({
    bookmarks: [],
    getFlattenBookmarks() {
      const bookmarks = get().bookmarks;

      return deepFlatten(bookmarks);
    },
  })
);
