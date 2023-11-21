import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const VersionContainer = styled(Box)({
  width: "60%",
  maxHeight: "98vh",
  margin: " 0 auto",
  outline: "0",
  backgroundColor: "#fff",
  paddingBottom: "10px",
  overflow: "scroll",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
  minHeight: "95vh",
});

export const ContentViewer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
});

export const VersionHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#47507A",
  color: "#fff",
  padding: "5px 0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  overflow: "hidden",
  top: "1px",
  left: 0,
  zIndex: 99,
  outline: 0,
  svg: {
    color: "#fff",
  },
}));

export const CloseIconContainer = styled(Box)(({ theme }) => ({
  //   backgroundColor: "#47507A",
  position: "absolute",
  zIndex: 99,
  outline: 0,
  right: "30px",
  svg: {
    color: "#000",
  },
}));
