import OnboardForm from "../components/pages/OnboardForm";
import OnboardList from "../components/pages/OnboardList";
import ChargeFile from "../components/pages/ChargeFile";
import Login from "../components/pages/LogIn";
import { matrixPath } from "./routePath";
import { lazy } from "react";

const OnboardFormLazy = lazy(() => import("../components/pages/OnboardForm"));

export const matrixRoutes = [
  {
    path: matrixPath.ONBOARD_FORM,
    Component: OnboardFormLazy,
    exact: true,
  },
  {
    path: matrixPath.ONBOARD_LIST,
    Component: OnboardList,
    exact: true,
  },
  {
    path: matrixPath.CHARGEFILE,
    Component: ChargeFile,
    exact: true,
  },
  {
    path: matrixPath.LOGIN,
    Component: Login,
    exact: true,
  },
];
