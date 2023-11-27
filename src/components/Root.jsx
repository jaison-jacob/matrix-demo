import React, { useEffect } from "react";
import { ProtectedRoute } from "../routes/protectedRoute";
import { ToastMessage } from "./shared/ToastMessage";
import CustomLoader from "./shared/CustomLoader";
import { useSelector } from "react-redux";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  MsalProvider,
} from "@azure/msal-react";

import { Navigate, useNavigate } from "react-router";
import { matrixPath } from "../routes/routePath";
import Layout from "./sidebar/Layout";

const Root = () => {
  const loader = useSelector((state) => state.isLoading);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  return (
    <div>
      <ToastMessage />
      {loader && <CustomLoader />}
      <AuthenticatedTemplate>
        {activeAccount ? (
          <ProtectedRoute element={<Layout />} hello="lkdkjd" />
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* <button onClick={handleRedirect}>signup</button> */}
        <ProtectedRoute element={<Navigate to={matrixPath.LOGIN} />} />
      </UnauthenticatedTemplate>
    </div>
  );
};
export default Root;
