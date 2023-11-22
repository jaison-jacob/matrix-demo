import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import styled from "styled-components";

const drawerWidth = 230;
const minDrawerWidth = 65;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "28px",

  /* Fallback: Set a background color. */
  backgroundColor: "red",

  /* Create the gradient. */
  backgroundImage: "linear-gradient(20deg, #2159E8, #22A2F2)",

  /* Set the background size and repeat properties. */
  backgroundSize: "100%",
  backgroundRepeat: "repeat",

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "-moz-background-clip": "text",
  "-moz-text-fill-color": "transparent",
  //   padding: theme.spacing(0, 5),
  // necessary for content to be below app bar
  ".MuiTypography-h6": {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  borderBottom: "1px solid #27244D",
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  ".MuiDrawer-paper": {
    background: "rgb(18, 17, 53)",
  },
}));

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  "&:hover": {
    backgroundColor: "#1b1b4d",
  },
}));

const StyledListIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ isselected }) => ({
  color: isselected ? "#2080E8 !important" : "#DDDDE0 !important",
  marginRight: "10px !important",
  ".MuiSvgIcon-root": {
    fontSize: "20px",
  },
}));

const StyledListText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ isselected }) => {
  return {
    color: isselected ? "#2080E8" : "#DDDDE0",
    ".MuiTypography-body1": {
      fontFamily: "Poppins",
      fontSize: "12px",
      letterSpacing: "1px",
      fontWeight: "100",
      textTransform: "Capitalize",
    },
  };
});

export { Drawer, DrawerHeader, StyledListItem, StyledListIcon, StyledListText };
