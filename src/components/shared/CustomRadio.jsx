import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormHelperText, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const RadioBox = styled("div")(({ rowBreak }) => ({
  display: "flex",
  alignItems: rowBreak ? "left" : "center",
  flexDirection: rowBreak && "column",
}));
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  ".MuiFormControlLabel-root .Mui-disabled": {
    opacity: "1",
    cursor: "not-allowed",
  },

  ".Mui-disabled": {
    color: "#000 !important",
  },
  ".Mui-checked": {
    color: "#006bbd !important",
  },
  ".MuiFormControlLabel-label	": {
    color: "#757575!important",
  },
}));

function CustomRadio({
  inputValues,
  name,
  onChange,
  onBlur,
  value,
  labelStyle,
  label,
  style,
  rowBreak,
  readonly,
  disabled,
  defaultValue,
  touched,
  errors,
  customHelpertext,
}) {
  const themeColor = useTheme();

  return (
    <FormControl>
      <RadioBox
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            // marginRight: "20px",
            fontFamily: "Poppins",
            color: "grey",
            fontSize: "16px",
            ...labelStyle,
          }}
        >
          {label}
        </div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          //   onChange={onChange}
          //   onBlur={onBlur}
          //   error={Boolean(
          //     customHelpertext || (touched?.[name] && errors?.[name])
          //   ).toString()}
          //   value={value || ""}
          style={style}
          //   defaultValue={defaultValue}
        >
          {inputValues?.map((option, i) => (
            <StyledFormControlLabel
              value={
                option?.accessor
                  ? option?.[option?.accessor]
                  : option?.id || option?.value
              }
              control={<Radio />}
              label={option?.name || option?.label}
              key={i}
              name={name}
              disabled={disabled}
            />
          ))}
        </RadioGroup>
      </RadioBox>
      <FormHelperText error>
        {customHelpertext ||
          (touched?.[name] && errors?.[name] ? errors?.[name] : "")}
      </FormHelperText>
    </FormControl>
  );
}

export default CustomRadio;
