import React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)(({ showpassword, value }) => {
  return {
    "& div > input": {
      fontFamily: !showpassword && value && "text-security-disc",
      "-webkit-text-security": !showpassword && value && "disc",
    },
    ".MuiFormLabel-root ": {
      color: "#757575 !important",
      fontFamily: "Poppins",
      fontSize: "13px",
    },
    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
      fontSize: "13px",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid #757575 !important",
    },
    ".MuiInputBase-input": {
      padding: "14px 14px",
      fontSize: "14px",
      color: "#757575",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #757575 !important",
    },
    ".MuiSelect-select": {
      padding: "13px 32px 13px 14px !important",
    },
  };
});

export function CustomPasswordField({
  name,
  onChange,
  value,
  variant,
  onBlur,
  label,
  disabled,
  style,
  isViewMode,
  showEyeIcon,
  touched,
  onKeyDown,
  errors,
  customHelpertext,
  placeholder,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyPress = (e) => {
    return !/^\S+$/.test(e.key) && e.preventDefault();
  };
  return (
    <StyledTextField
      id="standard-basic"
      label={label}
      placeholder={placeholder}
      variant={variant ? variant : "outlined"}
      type={"text"}
      name={name}
      fullWidth
      autoComplete={"off"}
      onChange={onChange}
      onBlur={onBlur}
      value={value || ""}
      style={style}
      onKeyDown={onKeyDown}
      showpassword={showPassword}
      error={Boolean(customHelpertext || (touched?.[name] && errors?.[name]))}
      helperText={
        customHelpertext ||
        (touched?.[name] && errors?.[name] ? errors?.[name] : "")
      }
      InputProps={{
        readOnly: isViewMode,
        disabled: disabled,
        onKeyPress: (e) => handleKeyPress(e),
        endAdornment: showEyeIcon && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              color="primary"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
