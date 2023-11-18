import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledSelectFeildContainer = styled(FormControl)(
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
    ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "14px",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid #757575 !important",
    },
    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "14px 14px",
      fontSize: "14px",
      color: "#757575",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #757575 !important",
    },

    ".MuiSelect-select ": {
      padding: "14px 32px 14px 14px",
    },
  })
);

export const CustomSelectField = ({
  label,
  variant,
  inputValues,
  name,
  onChange,
  onBlur,
  value,
  className,
  style,
  fieldStyle,
  isViewMode,
  disabled,
  touched,
  errors,
  customHelpertext,
}) => {
  return (
    <>
      <Box style={style}>
        <StyledSelectFeildContainer
          fullWidth
          error={Boolean(
            customHelpertext || (touched?.[name] && errors?.[name])
          )}
        >
          <InputLabel id="demo-simple-select-error-label">{label}</InputLabel>
          <Select
            labelid="demo-simple-select-error-label"
            id="demo-simple-select"
            value={value || ""}
            label={label}
            onChange={onChange}
            variant={variant || "outlined"}
            fullWidth
            name={name}
            onBlur={onBlur}
            error={Boolean(
              customHelpertext || (touched?.[name] && errors?.[name])
            )}
            className={className}
            style={fieldStyle}
            inputProps={{
              readOnly: isViewMode,
              disabled: Boolean(disabled),
            }}
          >
            {inputValues?.map((option, index) => (
              <MenuItem
                key={index}
                value={
                  option?.accessor
                    ? option[option?.accessor]
                    : option?.id || option?.value
                }
              >
                {option?.name ||
                  option?.label ||
                  option?.versionNo ||
                  "No data Found"}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>
            {customHelpertext || (touched?.[name] && errors?.[name])}
          </FormHelperText>
        </StyledSelectFeildContainer>
      </Box>
    </>
  );
};
