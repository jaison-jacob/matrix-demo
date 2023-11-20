import { IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import styled from "styled-components";

const drawerWidth = 230;
const minDrawerWidth = 65;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${minDrawerWidth}px) !important`,
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
  };
});

const StyledToolBar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: "0 30px !important",
  backgroundColor: "#FFFFFF",
  display: "flex !important",
  justifyContent: "space-between",
}));

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "absolute !important",
  left: "-20px",
  zIndex: 2,
  //   backgroundColor: "#121235",
  backgroundColor: "#47507A !important",
  padding: "5px !important",
}));

const StyledheaderText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "#3A3F4C",
  fontFamily: "Poppins !important",
  fontSize: "16px !important",
  fontWeight: "600 !important",
}));

export { StyledToolBar, StyledIconButton, StyledheaderText, AppBar };
