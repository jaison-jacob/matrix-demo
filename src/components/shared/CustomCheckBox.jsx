import * as React from "react";
import { Checkbox, Typography } from "@mui/material";
import styled from "styled-components";
export const StyledCheckBoxFeildContainer = styled(Checkbox)(
  ({ theme }, props) => ({
    ".MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: "12px",
      color: "#757575",
    },
  })
);
function CustomCheckBox(props) {
  const { label, onChange, checked, isViewMode } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <StyledCheckBoxFeildContainer
        sx={{ padding: 0, margin: 0, marginRight: 1 }}
        checked={checked}
        disabled={isViewMode}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
        color="primary"
      />
      <Typography
        sx={{ fontFamily: "Poppins", fontSize: "12px", color: "#757575" }}
      >
        {label}
      </Typography>
    </div>
  );
}
export default CustomCheckBox;
