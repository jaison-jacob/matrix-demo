import { Box, display } from "@mui/system";
import React from "react";
import styled from "styled-components";

const BouncingDotsLoader = (props) => {
  return (
    <div className="bouncing-loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default BouncingDotsLoader;
