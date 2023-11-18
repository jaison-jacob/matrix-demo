import React from "react";
import { ProtectedRoute } from "../routes/protectedRoute";
import { ToastMessage } from "./shared/ToastMessage";
import CustomLoader from "./shared/CustomLoader";
import { useSelector } from "react-redux";

const Root = () => {
  const loader = useSelector((state) => state.isLoading);
  return (
    <div>
      <ToastMessage />
      {loader && <CustomLoader />}
      <ProtectedRoute />
    </div>
  );
};
export default Root;
