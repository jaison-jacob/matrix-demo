import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Profile } from "./Profile";
import {
  StyledIconButton,
  StyledToolBar,
  StyledheaderText,
} from "../../styles/appbar";
import { Box } from "@mui/material";

const Appbar = (props) => {
  const { open, setOpen, pageName, theme } = props;

  
  return (
    <Box>
      <StyledToolBar>
        <StyledIconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ChevronRightIcon />
        </StyledIconButton>
        <StyledheaderText variant="h6" noWrap component="div">
          {pageName}
        </StyledheaderText>
        <Profile />
      </StyledToolBar>
    </Box>
  );
};

export default Appbar;
