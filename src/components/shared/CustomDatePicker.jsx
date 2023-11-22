import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText } from "@mui/material";
import styled from "styled-components";

export const StyledDateFeildContainer = styled(DatePicker)(
  ({ theme }, props) => ({
    width: "100%",
    padding: "0",
    ".MuiTextField-root": {
      width: "100% !important",
    },
    ".MuiInputBase-formControl": {
      fontSize: "14px",
      color: "#757575",
    },
    ".MuiOutlinedInput-input": {
      padding: "14px",
    },
    ".MuiOutlinedInput-notchedOutline ": {
      border: "1px solid #757575 !important",
    },
    ".Mui-focused": {
      color: "#757575 !important",
    },
  })
);

export function CustomDatePicker({
  label,
  onChange,
  value,
  name,
  isViewMode,
  maxDate,
  minDate,
  className,
  style,
  disabled,
  onBlur,
  touched,
  errors,
  customHelpertext,
}) {
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        style={{ width: "100%" }}
      >
        <StyledDateFeildContainer
          name={name}
          label={label}
          value={value || null}
          minDate={minDate ? new Date(minDate) : ""}
          maxDate={maxDate ? new Date(maxDate) : ""}
          style={style}
          autoComplete="off"
          readOnly={isViewMode}
          disabled={disabled}
          className={className}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              onBlur={onBlur}
              autoComplete="off"
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              error={Boolean(
                customHelpertext || (touched?.[name] && errors?.[name])
              )}
            />
          )}
        />
      </LocalizationProvider>
      <FormHelperText error>
        {customHelpertext ||
          (touched?.[name] && errors?.[name] ? errors?.[name] : "")}
      </FormHelperText>
    </>
  );
}
