import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { StyleProgressBar } from "../../styles/CustomProgressBar";

export default function CustomLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        left: "0px",
        top: "0px",
        zIndex: 99,
        backgroundColor: "#fff",
      }}
    >
      <StyleProgressBar />
    </Box>
  );
}
