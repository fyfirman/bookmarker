import { axios } from "~/utils/axios-client";
import { SeoData } from "./scrapper.schema";

const getData = async (url: string) => {
  const { data } = await axios.post<SeoData>(
    "https://aws-sg.fyfirman.com:23000/seo-scraper",
    {
      url,
    }
  );

  return data;
};

const scrapperService = {
  getData,
};

export default scrapperService;
