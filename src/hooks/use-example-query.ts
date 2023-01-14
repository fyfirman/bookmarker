import { useQuery } from "@tanstack/react-query";
import errorHandler from "~/helpers/error-handler";
import exampleService from "~/services/example-service";

export const useExampleQuery = () =>
  useQuery({
    queryKey: ["example"],
    queryFn: exampleService.getExample,
    onError: errorHandler,
  });
