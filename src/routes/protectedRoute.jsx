import { Navigate, Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { matrixRoutes, loginFormRoutes } from "./routes";
// import Layout from "../components/shared/Layout";
import Layout from "../components/sidebar/Layout";
import { matrixPath } from "./routePath";
import { useDispatch, useSelector } from "react-redux";
import { storeMyProfile } from "../redux/action";

export const ProtectedRoute = () => {
  const myProfileData = useSelector((state) => state.myProfile);
  const dispatch = useDispatch();
  const checkLogin = () => {
    if (Object.keys(myProfileData).length <= 0) {
      const loginData = JSON.parse(localStorage.getItem("loginValue"));
      if (loginData != null && Object.keys(loginData).length > 0) {
        dispatch(storeMyProfile(loginData));
        return <Layout />;
      } else {
        return <Navigate to={matrixPath.LOGIN} />;
      }
    } else {
      return <Layout />;
    }
  };
  return (
    <Routes>
      <Route path="/" element={checkLogin()} exact={false}>
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
