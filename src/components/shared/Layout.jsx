import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// import { styled } from "@mui/system";
// import { createTheme } from "@mui/material";
// import TopBar from "../topBar/TopBar";
// import Sidebar from "../sidebar/SideBar";
import CustomLoader from "../shared/CustomLoader";
// import vhitechLogo from "../../asset/pexels-the-lazy-artist-gallery-1342609.jpg";

const MainLayout = styled("div")(() => ({
  width: "calc(100% - 2px)",
  height: "100vh",
}));

const InnerLayout = styled("div")(() => ({
  width: "100%",
  display: "flex",
  height: "calc(100% - 77px)",
}));

const ContentWrapper = styled("div")(() => ({
  width: "calc(100% - 252px)",
  height: "100%",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const Layout = () => {
  //   console.log("layout call", Outlet);
  return (
    <MainLayout>
      {/* <TopBar /> */}
      {/* <InnerLayout> */}
      {/* <Sidebar></Sidebar> */}
      {/* <ContentWrapper>
          <Suspense fallback={<CustomLoader />}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </InnerLayout> */}
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default Layout;
