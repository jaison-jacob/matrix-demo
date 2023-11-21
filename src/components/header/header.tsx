import React from "react";
import { StyledHeader } from "./header.styled";
import { Link, useLocation } from "react-router-dom";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";

import { Tooltip } from "@mui/material";

export default function PageHeader() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <StyledHeader>
      <div>
        <ul>
          <li className={splitLocation[1] === "visit" ? "active" : ""}>
            <Link to={"/visit"}>
              <Tooltip title="Visit">
                <NewspaperOutlinedIcon />
              </Tooltip>
            </Link>
          </li>
          {/* <li className={splitLocation[1] === "diagnosis" ? "active" : ""}>
            <Link to={"/diagnosis"}>
              <Tooltip title="Diagnosis">
                <NewspaperOutlinedIcon />
              </Tooltip>
            </Link>
          </li> */}
          <li className={splitLocation[1] === "onboardForm" ? "active" : ""}>
            <Link to={"/onboardForm"}>
              <Tooltip title="1500 Form">
                <AddToQueueIcon />
              </Tooltip>
            </Link>
          </li>
          <li
            className={splitLocation[1] === "coding-validation" ? "active" : ""}
          >
            <Link to={"/coding-validation"}>
              <Tooltip title="coding Validation">
                <FactCheckOutlinedIcon />
              </Tooltip>
            </Link>
          </li>
          {/* <li
            className={splitLocation[1] === "acknowledgement" ? "active" : ""}
          >
            <Link to={"/acknowledgement"}>
              <AddToQueueIcon />
            </Link>
          </li>
          <li className={splitLocation[1] === "claim-denial" ? "active" : ""}>
            <Link to={"/claim-denial"}>
              <AddToQueueIcon />
            </Link>
          </li> */}
        </ul>
      </div>
    </StyledHeader>
  );
}
