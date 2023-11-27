import React from "react";
import Root from "./components/Root";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./components/styled-components/Global.styled";
import ThemeContext from "./theme/themeContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { msalConfig } from "./auth-config";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import Cookies from "universal-cookie";
import { matrixPath } from "./routes/routePath";

const msalInstance = new PublicClientApplication(msalConfig);

// const navigate = useNavigate();
const cookies = new Cookies();



if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
    cookies.set("token", event.payload.accessToken, { path: "/" });
    // accessToken
    // navigate(matrixPath.VISIT);
  }
});

// msalInstance.acquireTokenSilent

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeContext>
          <BrowserRouter>
            <GlobalStyle />
            <MsalProvider instance={msalInstance}>
              <Root />
            </MsalProvider>
          </BrowserRouter>
        </ThemeContext>
      </Provider>
    </div>
  );
}

export default App;
