import OnboardList from "../pages/OnboardList";
import ChargeFile from "../pages/ChargeFile";
import Login from "../pages/LogIn";
import { matrixPath } from "./routePath";
import { lazy } from "react";
import Home from "../pages/Home";
import Visit from "../pages/Visit";
import Diagnosis from "../pages/Diagnosis";
import Coding from "../pages/Coding";
import Claim from "../pages/Claim";
import PatientInfo from "../pages/PatientInfo";
import CodingForm from "../pages/CodingForm";

const OnboardFormLazy = lazy(() => import("../pages/OnboardForm"));

export const matrixRoutes = [
  {
    path: matrixPath.HOME,
    Component: Home,
    exact: true,
  },
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
  {
    path: matrixPath.VISIT,
    Component: Visit,
    exact: true,
  },
  {
    path: matrixPath.DIAGNOSIS,
    Component: Diagnosis,
    exact: true,
  },
  {
    path: matrixPath.FORM,
    Component: OnboardFormLazy,
    exact: true,
  },
  {
    path: matrixPath.CODING,
    Component: CodingForm,
    exact: true,
  },
  {
    path: matrixPath.CLAIM,
    Component: Claim,
    exact: true,
  },
  {
    path: matrixPath.VISITPATIENT,
    Component: PatientInfo,
    exact: true,
  },
];
