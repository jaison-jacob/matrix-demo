import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";

export const StyledSelectContainer = styled(FormControl)(
  ({ theme }, props) => ({
    ".MuiFormLabel-root ": {
      color: "#757575 !important",
      fontFamily: "Poppins",
    },
    ".MuiInputBase-input": {
      color: "#757575 !important",
      fontFamily: "Poppins",
    },
    ".mui-focused": {
      color: "#757575",
      fontFamily: "Poppins",
    },
    ".MuiInputBase-root:after": {
      borderBottom: "2px solid grey !important",
    },
  })
);

export default function CustomSelectFeild(props) {
  const { label, menuOption, varient } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <StyledSelectContainer
        variant={varient || "standard"}
        sx={{ width: "100%", marginBottom: 3 }}
      >
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          {menuOption.map((item) => {
            return <MenuItem value={item.val}>{item.label}</MenuItem>;
          })}
        </Select>
      </StyledSelectContainer>
    </div>
  );
}
