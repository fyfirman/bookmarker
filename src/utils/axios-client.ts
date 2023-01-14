import Axios from "axios";
import { env } from "./env-variable";

export const axios = Axios.create({
  baseURL: env.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  config.baseURL = env.baseUrl;
  return config;
});
