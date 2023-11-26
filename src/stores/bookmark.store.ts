import { Bookmark } from "~/interfaces/bookmark";
import createStore from "~/libs/create-store";
import deepFlatten from "~/libs/deep-flatten";

export enum SortOrder {
  Ascending = "asc",
  Descending = "desc",
}

interface SortFlattenBookmark {
  dateAdded: SortOrder;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  getFlattenBookmarks: (sort?: SortFlattenBookmark) => Bookmark[];
  getTreeById: (bookmarkId: Bookmark["id"]) => Bookmark | undefined;
}

export const useBookmarkStore = createStore<BookmarkState>(
  "Bookmark",
  (_, get) => ({
    bookmarks: [],
    getFlattenBookmarks(sort) {
      const { bookmarks } = get();

      const flattenedBookmarks = deepFlatten(bookmarks);

      if (sort?.dateAdded) {
        if (sort.dateAdded === SortOrder.Ascending) {
          return flattenedBookmarks.sort((a, b) => {
            if (!a.dateAdded) {
              return -1;
            }

            if (!b.dateAdded) {
              return 1;
            }

            return b.dateAdded >= a.dateAdded ? 1 : -1;
          });
        }
        return flattenedBookmarks.sort((a, b) => {
          if (!a.dateAdded) {
            return 1;
          }

          if (!b.dateAdded) {
            return -1;
          }

          return b.dateAdded >= a.dateAdded ? -1 : 1;
        });
      }

      return flattenedBookmarks;
    },
    getTreeById(bookmarkId: Bookmark["id"]) {
      const { bookmarks } = get();

      return bookmarks.find((tree) => tree.id === bookmarkId);
    },
  })
);
