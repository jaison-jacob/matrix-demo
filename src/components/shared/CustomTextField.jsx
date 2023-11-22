import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const StyledTextFeildContainer = styled(TextField)(
  ({ theme }, props) => ({
    ".MuiFormLabel-root ": {
      color: "#757575 !important",
      fontFamily: "Poppins",
      fontSize: "12px",
    },

    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
    },
    ".MuiInputLabel-shrink": {
      fontSize: "16px",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid #757575 !important",
    },
    ".MuiInputBase-input ": {
      padding: "14px 14px",
      fontSize: "12px",
      color: "#757575",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #757575 !important",
    },
  })
);

const CustomTextField = ({
  type,
  name,
  onChange,
  value,
  variant,
  onBlur,
  label,
  disabled,
  style,
  isViewMode,
  maxLength,
  fullWidth,
  fieldType,
  autoComplete,
  onkeydown,
  placeholder,
  endAdornment,
  touched,
  errors,
  customHelpertext,
  RestrictCopyPaste,
}) => {
  const handleKeyPress = (e) => {
    if (fieldType === "mobile" && e.keyCode !== 13) {
      return !/[0-9]/.test(e.key) && e.preventDefault();
    }
    if (fieldType === "alphaNumeric") {
      return !/[0-9A-Za-z-/:_]/.test(e.key) && e.preventDefault();
    }
    if (fieldType === "alphabets") {
      return !/[A-Za-z/]/.test(e.key) && e.preventDefault();
    }
    if (type === "number" && e.keyCode !== 13) {
      return !/[0-9]/.test(e.key) && e.preventDefault();
    }
    if (fieldType === "decimal") {
      return !/[0-9.]/.test(e.key) && e.preventDefault();
    }
  };

  const handleCopy = (event) => {
    if (RestrictCopyPaste) {
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    if (RestrictCopyPaste) {
      event.preventDefault();
    }
  };
  return (
    <>
      <StyledTextFeildContainer
        id="standard-basic"
        label={label}
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        type={"text"}
        name={name}
        fullWidth={fullWidth || true}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        endadornment={endAdornment}
        style={style}
        error={Boolean(
          customHelpertext
            ? touched && errors
            : touched?.[name] && errors?.[name]
        )}
        helperText={
          customHelpertext
            ? touched && errors
              ? errors
              : ""
            : touched?.[name] && errors?.[name]
            ? errors?.[name]
            : ""
        }
        inputProps={{
          endadornment: endAdornment,
          onKeyPress: (e) => handleKeyPress(e),
          onKeyDown: (e) => onkeydown && onkeydown(e),
          readOnly: isViewMode,
          disabled: disabled,
        }}
        onCopy={handleCopy}
        onPaste={handlePaste}
        onInput={(e) => {
          e.target.value &&
            maxLength &&
            (e.target.value = e.target.value.toString().slice(0, maxLength));
        }}
      />
    </>
  );
};

export default CustomTextField;
