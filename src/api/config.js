import axios from "axios";
import Cookies from "universal-cookie";
import { isLoading } from "../redux/action";
import { jwtDecode } from "jwt-decode";
import store from "../redux/store";
// import { getApiServices } from "./api";
import { apiRoutes } from "./apiPath";
import { loginRequest, msalConfig } from "../auth-config";
import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";
// import { useMsal } from "@azure/msal-react";

const cookies = new Cookies();
const getToken = cookies.get("token");
const getRefreshToken = cookies.get("refreshToken");
const decodedTokenData = getToken ? jwtDecode(cookies.get("token")) : "";
export const appApi = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: import.meta.env.VITE_APP_API_END_POINT,
});

const msalInstance = new PublicClientApplication(msalConfig);

const getTokenData = async (account, originalRequest) => {
  const request = {
    account: account,
    forceRefresh: true,
    scopes: loginRequest.scopes,
  };
  try {
    await msalInstance.initialize();
    const tokenResponse = await msalInstance.acquireTokenSilent(request);
    return tokenResponse;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      try {
        const tokenResponse = await msalInstance.acquireTokenPopup(request);
        return tokenResponse;
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(error);
    }
  }
};

appApi.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${getToken}`;
    // store.dispatch(isLoading(true));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appApi.interceptors.response.use(
  (response) => {
    // store.dispatch(isLoading(false));
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      decodedTokenData.exp < new Date().getTime() / 1000 &&
      !originalRequest._retry
    ) {
      try {
        const activeAccount = msalInstance.getActiveAccount();

        if (activeAccount) {
          const req = await getTokenData(activeAccount, originalRequest);
          originalRequest.headers[
            "authorization"
          ] = `Bearer ${req.accessToken}`;

          originalRequest._retry = true;
          originalRequest.headers[
            "authorization"
          ] = `Bearer ${req.accessToken}`;
          cookies.set("token", req.accessToken);
        }
      } catch (err) {
        // store.dispatch(isLoading(false));
        originalRequest._retry = false;
      }

      return appApi(originalRequest);
    }

    // store.dispatch(isLoading(false));
    return Promise.reject(error);
  }
);
