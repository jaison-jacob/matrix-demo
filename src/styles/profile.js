import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";

const StyledProfileAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ from }) => ({
  backgroundColor:
    from === "menuItem" ? "#ffff !important" : "#47507A !important",
  fontFamily: "Poppins !important",
  fontSize: "18px !important",
  //   fontWeight: "600",
  color: from === "menuItem" ? "#51555B !important" : "#ffff !important",
}));

const CustomMenu = styled(Menu)(({ theme }) => ({
  ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    borderRadius: "8px",
    fontFamily: "Poppins",
  },
  ".MuiList-padding": {
    padding: "0",
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "Poppins !important",
  fontSize: "14px !important",
  padding: "16px 16px !important",
}));

const StyledProfileItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "250px",
  padding: "12px 16px",
  backgroundColor: "#47507A",
  //   marginTop: "-10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const StyledListIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "#DDDDE0",
  marginRight: "10px !important",
  //   marginLeft: "10px",
  ".css-i4bv87-MuiSvgIcon-root": {
    fontSize: "20px",
  },
}));

const StyledListText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "#DDDDE0",
  ".css-10hburv-MuiTypography-root": {
    fontFamily: "Poppins",
    fontSize: "12px ",
    letterSpacing: "1px",
    fontWeight: "100",
    textTransform: "Capitalize",
  },
}));

export {
  StyledProfileAvatar,
  CustomMenu,
  CustomMenuItem,
  StyledProfileItem,
  StyledListIcon,
  StyledListText,
};
