import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";
import {
  FlexContainer,
  GlobalStyle,
} from "./components/styled-components/Global.styled";
import ThemeContext from "./theme/themeContext";
import PageHeader from "./components/header/header";

function App() {
  return (
    <div>
      <ThemeContext>
        <BrowserRouter>
          <GlobalStyle />
          <FlexContainer>
            <PageHeader />
            <div
              style={{
                width: "calc(100vw - 100px)",
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Root />
            </div>
          </FlexContainer>
        </BrowserRouter>
      </ThemeContext>
    </div>
  );
}

export default App;
