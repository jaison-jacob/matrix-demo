import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import {
  CustomMenu,
  CustomMenuItem,
  StyledListIcon,
  StyledListText,
  StyledProfileAvatar,
  StyledProfileItem,
} from "../../styles/profile";
import { useDispatch, useSelector } from "react-redux";
import { profileActionItem } from "../../constant/profile";
import { isLoading, storeMyProfile } from "../../redux/action";
import { successMsg } from "../../utils/snackMsgTrigger";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const myProfileData = useSelector((state) => state.myProfile);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const logOut = (replaceRoute) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch(isLoading(false));
      dispatch(storeMyProfile({}));
      dispatch(successMsg("sucessfully Logout"));
      navigate(replaceRoute);
      localStorage.setItem("loginValue", JSON.stringify({}));
    }, 2000);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Profile Menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <StyledProfileAvatar>
            {myProfileData?.name?.slice(0, 1)}
          </StyledProfileAvatar>
        </IconButton>
      </Tooltip>
      <CustomMenu
        sx={{ mt: "45px", borderRadius: 5 }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <StyledProfileItem>
          <StyledProfileAvatar from={"menuItem"}>
            {myProfileData?.name?.slice(0, 1)}
          </StyledProfileAvatar>
          <Box>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {myProfileData.name}
            </div>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                color: "#e1dbdb",
                letterSpacing: "1px",
              }}
            >
              {myProfileData.role}
            </div>
          </Box>
        </StyledProfileItem>
        {profileActionItem.map((item, index) => (
          <CustomMenuItem
            key={index}
            onClick={() => {
              if (item.replaceRoute) logOut(item.replaceRoute);
              handleCloseUserMenu();
            }}
          >
            <StyledListIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "#000",
              }}
            >
              {item?.icon && React.createElement(item.icon)}
            </StyledListIcon>
            <StyledListText primary={item.label} sx={{ color: "#1E1E1E" }} />
          </CustomMenuItem>
        ))}
      </CustomMenu>
    </Box>
  );
};

export { Profile };
