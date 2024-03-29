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

type Breadcrumb = { path: string; title: string };

interface BookmarkState {
  bookmarks: Bookmark[];
  getFlattenBookmarks: (sort?: SortFlattenBookmark) => Bookmark[];
  getBookmarkByPath: (
    path: string
  ) => [Bookmark | undefined, Breadcrumb[]] | undefined;
  separateFoldersAndBookmarks(bookmarks: Bookmark[]): {
    folders: Bookmark[];
    bookmarks: Bookmark[];
  };
  getForFolderPage(path: string):
    | {
        breadcrumbs: Breadcrumb[];
        title: string;
        folders: Bookmark[];
        bookmarks: Bookmark[];
      }
    | undefined;
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

      const ids = path
        .replace("0/", "")
        .split("/")
        .filter((id) => id !== "");
      if (bookmarks.length === 0) {
        return undefined;
      }

      let currentNode: Bookmark | undefined = bookmarks[0];
      const breadcrumbs: Breadcrumb[] = [];

      for (const id of ids) {
        currentNode = findNodeById(id, currentNode);
        if (!currentNode) {
          break;
        }
        breadcrumbs.push({
          path: !!breadcrumbs.at(-1)
            ? `${breadcrumbs.at(-1)!.path}/${currentNode.id}`
            : currentNode.id,
          title: currentNode.title,
        });
      }

      return [currentNode, breadcrumbs];
    },
    separateFoldersAndBookmarks(nodes: Bookmark[]) {
      const folders: Bookmark[] = [];
      const bookmarks: Bookmark[] = [];

      nodes.forEach((node) => {
        if ("url" in node) {
          bookmarks.push(node);
        } else {
          folders.push(node);
        }
      });

      return { folders, bookmarks };
    },
    getForFolderPage(path: string) {
      const res = this.getBookmarkByPath(path);

      if (!res) {
        return undefined;
      }

      const [data, breadcrumbs] = res;

      if (!data?.children) {
        return undefined;
      }

      const groupedData = this.separateFoldersAndBookmarks(data.children);

      return {
        breadcrumbs,
        title: data.title,
        folders: groupedData.folders,
        bookmarks: groupedData.bookmarks.sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    },
  })
);
