import { Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { matrixRoutes } from "./routes";
import Layout from "../components/shared/Layout";
// import List from "../pages/OnboardList";

// const GetLayout = () => {
//   return <Layout />;
// };

// const Listh = () => {
//   return <List />;
// };

export const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact={false}>
        {/* <Route path="/onboardList" element={<Listh />} exact={false} /> */}
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
    </Routes>
  );
};
