import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { IconButton, InputAdornment } from "@mui/material";

export const StyledTextFeildContainer = styled(TextField)(
  ({ theme }, props) => ({
    ".MuiFormLabel-root ": {
      color: "#757575 !important",
      fontFamily: "Poppins",
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      color: "#757575 !important",
      fontFamily: "Poppins",
    },
    ".css-1rb63tl-MuiInputBase-root-MuiInput-root": {
      color: "#757575 !important",
      fontFamily: "Poppins",
    },
    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid #757575 !important",
    },
    ".css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
      padding: "14px 14px",
      fontSize: "14px",
      color: "#757575",
    },
    ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #757575 !important",
    },
  })
);

const TextFeildComp = (props) => {
  const { type, label, variant, endormentIcon } = props;
  const endormentIco = endormentIcon;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%", marginBottom: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <StyledTextFeildContainer
        id="standard-basic"
        label={label || "Name"}
        variant={variant || "standard"}
        type={type || "text"}
        multiline
      />
    </Box>
  );
};

export default TextFeildComp;
