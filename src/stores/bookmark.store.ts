import { Bookmark } from "~/interfaces/bookmark";
import { findNodeById } from "~/libs/bookmark-chrome";
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
  getBookmarkByPath: (path: string) => Bookmark | undefined;
}

export const useBookmarkStore = createStore<BookmarkState>(
  "Bookmark",
  (set, get) => ({
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
    getBookmarkByPath(path: string) {
      const { bookmarks } = get();

      const ids = path.split("/").filter((id) => id !== "");
      if (bookmarks.length === 0) {
        return undefined;
      }

      let currentNode: Bookmark | undefined = bookmarks[0];

      for (const id of ids) {
        currentNode = findNodeById(id, currentNode);
        if (!currentNode) {
          break;
        }
      }

      return currentNode;
    },
  })
);
