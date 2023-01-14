import { Response } from "~/interfaces/response";
import { axios } from "~/utils/axios-client";
import { Example } from "./example.schema";

const getExample = async () => {
  const { data } = await axios.get<Response<Example[]>>("/example");

  return data;
};

const exampleService = {
  getExample,
};

export default exampleService;
