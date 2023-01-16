import { useQuery } from "@tanstack/react-query";
import errorHandler from "~/helpers/error-handler";
import chromeService from "~/services/chrome-service";

export const useBookmarkQuery = () =>
  useQuery({
    queryKey: ["bookmark"],
    queryFn: chromeService.getBookmarks,
    onError: errorHandler,
  });
