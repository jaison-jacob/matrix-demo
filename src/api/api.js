import { apiRoutes } from "./apiPath";
import { appApi } from "./config";

// post call
export const postApiServices = (path, value) => {
  return appApi.post(`${path}`, value);
};
