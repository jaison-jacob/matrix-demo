import { Route, Routes } from "react-router-dom";
import { matrixRoutes, loginFormRoutes } from "./routes";

export const ProtectedRoute = ({ element }) => {
  return (
    <Routes>
      <Route path="/" element={element} exact={false}>
        {matrixRoutes.map(({ path, Component }, index) => {
          return (
            <Route
              path={path}
              element={<Component />}
              exact={false}
              key={index}
            />
          );
        })}
      </Route>
      {loginFormRoutes.map(({ path, Component, exact }) => (
        <Route path={path} element={<Component />} exact={exact} key={path} />
      ))}
    </Routes>
  );
};
