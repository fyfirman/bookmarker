import { useQuery } from "@tanstack/react-query";
import errorHandler from "~/helpers/error-handler";
import chromeService from "~/services/chrome-service";
import { useBookmarkStore } from "~/stores/bookmark.store";

export const useBookmarkQuery = () =>
  useQuery({
    queryKey: ["bookmark"],
    queryFn: chromeService.getBookmarks,
    onSuccess(data) {
      useBookmarkStore.setState({
        bookmarks: data,
      });
    },
    onError: errorHandler,
  });
