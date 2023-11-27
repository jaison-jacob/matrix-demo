import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet, useLocation } from "react-router-dom";
import CustomLoader from "../shared/CustomLoader";
import { useSelector } from "react-redux";
import { sideBarData } from "../../constant/sidebar";
import Appbar from "./Appbar";
import { Main } from "../../styles/main";
import DrawerComp from "./Drawer";

const drawerWidth = 230;
const minDrawerWidth = 65;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${minDrawerWidth}px)`,
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #ded3bd70",
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const roleIds = useSelector((state) => state.roleIds);
  const [sidebarActionData, setSidebarActionData] = React.useState({
    availableSidebarData: [],
    selectedPage: {},
  });
  const location = useLocation();

  React.useEffect(() => {
    const currentSidebarData = sideBarData.filter((item) => {
      let data = null;
      item.menuId.forEach((item) => {
        if (roleIds.includes(item)) {
          data = item;
          return;
        }
      });
      return data != null;
    });

    const selectedPage = currentSidebarData.filter((item) => {
      return location.pathname.includes(item.routeKey);
    });

    setSidebarActionData({
      ...sidebarActionData,
      availableSidebarData: currentSidebarData,
      selectedPage: selectedPage.length > 0 ? selectedPage[0] : {},
    });
  }, [location.pathname]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" theme={theme} open={open}>
        <Appbar
          open={open}
          setOpen={setOpen}
          pageName={sidebarActionData.selectedPage.pageName}
          theme={theme}
        />
      </AppBar>
      <DrawerComp
        open={open}
        theme={theme}
        sidebarActionData={sidebarActionData}
      />
      <Main theme={theme} open={open}>
        <Box marginTop={"20px"}>
          <React.Suspense fallback={<CustomLoader />}>
            <Outlet />
          </React.Suspense>
        </Box>
      </Main>
    </Box>
  );
}
