import { useQuery } from "@tanstack/react-query";
import errorHandler from "~/helpers/error-handler";
import scrapperService from "~/services/scrapper-service";

export const useScrapperQuery = (url: string) =>
  useQuery({
    queryKey: ["seo-data", url],
    queryFn: () => scrapperService.getData(url),
    onError: errorHandler,
  });
