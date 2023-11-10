import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";

export const StyleProgressBar = styled(CircularProgress)(
  ({ theme, props }) => ({
    ".MuiCircularProgress-colorPrimary": {
      color: "green !important",
    },
  })
);
