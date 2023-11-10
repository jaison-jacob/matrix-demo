import { useState } from "react";
import OnboardForm from "./components/pages/OnboardForm";
import OnBoardList from "./components/pages/OnboardList";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <OnboardForm /> */}
      {/* <OnBoardList /> */}
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
}

export default App;
