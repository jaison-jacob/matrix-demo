import React from "react";
import { BreadCrumbWrapper } from "./breadcrumb.styled";

export default function Breadcrumb({ title }) {
  return (
    <BreadCrumbWrapper>
      <h2>{title}</h2>
    </BreadCrumbWrapper>
  );
}
