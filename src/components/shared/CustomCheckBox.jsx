import * as React from "react";
import { Checkbox, Typography } from "@mui/material";

function CustomCheckBox(props) {
  const { label, onChange, checked, isViewMode } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <Checkbox
        sx={{ padding: 0, margin: 0, marginRight: 1 }}
        checked={checked}
        disabled={isViewMode}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
        color="primary"
      />
      <Typography>{label}</Typography>
    </div>
  );
}
export default CustomCheckBox;
