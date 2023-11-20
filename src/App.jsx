import React from "react";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/styled-components/Global.styled";
import ThemeContext from "./theme/themeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeContext>
          <BrowserRouter>
            <GlobalStyle />
            <Root />
          </BrowserRouter>
        </ThemeContext>
      </Provider>
    </div>
  );
}

export default App;
