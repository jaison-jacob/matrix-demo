import { Box, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const StyledTextAreaFeildContainer = styled(TextField)(
  ({ theme }, props) => ({
    ".MuiFormLabel-root ": {
      color: "#757575 !important",
      fontFamily: "Poppins",
      fontSize: "14px",
    },
    ".MuiInputBase-root": {
      color: "#757575 !important",
      fontFamily: "Poppins",
      fontSize: "13px",
      padding: "14px",
    },
    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid grey !important",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid grey !important",
    },
  })
);

function CustomTextarea(props) {
  const {
    type,
    name,
    onChange,
    errors,
    touched,
    value,
    variant,
    onBlur,
    label,
    disabled,
    style,
    isViewMode,
    maxLength,
    fullWidth,
    autoComplete,
    onkeydown,
    error,
    helpertext,
    placeholder,
    endAdornment,
    minRows,
    maxRows,
    className,
  } = props;

  return (
    <Box>
      <StyledTextAreaFeildContainer
        multiline
        maxRows={maxRows}
        minRows={minRows}
        id="standard-basic"
        label={label}
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        type={type || "text"}
        name={name}
        className={className}
        fullWidth={fullWidth || true}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        // value={value || ""}
        endadornment={endAdornment}
        sx={style}
        error={Boolean(error || (touched?.[name] && errors?.[name]))}
        helperText={
          error ||
          helpertext ||
          (touched?.[name] && errors?.[name] ? errors?.[name] : "")
        }
        InputProps={{
          onKeyDown: (e) => onkeydown && onkeydown(e),
          readOnly: isViewMode,
          disabled: disabled,
        }}
        onInput={(e) => {
          e.target.value &&
            maxLength &&
            (e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, maxLength));
        }}
      />
    </Box>
  );
}

export default CustomTextarea;
