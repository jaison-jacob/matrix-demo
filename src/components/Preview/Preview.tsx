import React from "react";
import { PreviewWrapper } from "./Preview.styled";

export default function Preview({showPreview}) {
  return (
    <PreviewWrapper>
      <img src="/preview.png" />
      <div className="close-icon" onClick={() => showPreview()}>
        <span>X</span>
      </div>
    </PreviewWrapper>
  );
}
