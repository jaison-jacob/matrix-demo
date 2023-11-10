import { ThemeProvider } from "@mui/material";
import React from "react";
import { ProtectedRoute } from "../routes/protectedRoute";
// import { Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";

const Root = () => {
  console.log("Root call");
  return (
    <div>
      <ProtectedRoute />
      {/* <Routes>
        <Route path="/" exact="false" Component={<Layout />}></Route>
      </Routes> */}
    </div>
  );
};
export default Root;
