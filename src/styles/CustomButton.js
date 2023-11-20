import { Button } from "@mui/material";
import styled from "styled-components";

export const SubmitButton = styled(Button)(({ theme, props }) => {
  return {
    background: "#03CDE1",
    color: "white",
    margin: "0 8px",
    height: "36px",
    textTransform: "capitalize !important",
    fontFamily: "Poppins !important",
  };
});
