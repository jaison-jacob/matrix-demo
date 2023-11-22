import { Divider, List, ListItemButton, Typography } from "@mui/material";
import React from "react";
import {
  Drawer,
  DrawerHeader,
  StyledListItem,
  StyledListIcon,
  StyledListText,
} from "../../styles/drawer";
import { useNavigate } from "react-router-dom";

const DrawerComp = (props) => {
  const { open, sidebarActionData, theme } = props;
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open} theme={theme}>
      <DrawerHeader theme={theme}>
        {open && (
          <Typography variant="h6" color={"GrayText"} noWrap component="div">
            Lateral Care
          </Typography>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarActionData.availableSidebarData?.map((item, index) => (
          <StyledListItem
            key={index}
            disablePadding
            sx={{
              display: "block",
            }}
            onClick={() => navigate(item.routePath)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <StyledListIcon
                isselected={
                  sidebarActionData.selectedPage.routeKey === item.routeKey
                }
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item?.icon && React.createElement(item.icon)}
              </StyledListIcon>
              <StyledListText
                primary={item.label}
                isselected={
                  sidebarActionData.selectedPage.routeKey === item.routeKey
                }
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComp;
