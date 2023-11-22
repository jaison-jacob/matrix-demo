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
      fontSize: "13px",
    },
    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid #757575 !important",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #757575 !important",
    },

    ".MuiSelect-select ": {
      padding: "13px 32px 13px 13px",
      fontSize: "14px",
      color: "#757575",
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
