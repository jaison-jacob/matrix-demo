import styled from "@emotion/styled";

export const PreviewWrapper = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: rgb(0 0 0 / 52%);
  text-align: center;

  img {
    height: 100%;
  }
  .close-icon {
    position: fixed;
    z-index: 9;
    right: 12%;
    font-size: 28px;
    top: 10px;
    color: #fff;
    background-color: rgb(178 178 178 / 81%);
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 50%;
  }

`;
