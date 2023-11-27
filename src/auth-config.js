import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "9df4e8e3-9c7c-4211-91ac-eebe51fb762a",
    authority:
      "https://login.microsoftonline.com/e48dfc6e-1e65-47ef-9dea-55be3cf8f072",
    redirectUri: window.location.origin + "/oauth2-redirect",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.log(message);
            return;
          case LogLevel.Info:
            console.log(message);
            return;
          case LogLevel.Verbose:
            console.log(message);
            return;
          case LogLevel.Warning:
            console.log(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["api://7211391e-d383-4ffa-a37d-63bad4e7c5b8/user_impersonation"],
  //   const scopes = [`7211391e-d383-4ffa-a37d-63bad4e7c5b8/.default`, 'openId']
};
