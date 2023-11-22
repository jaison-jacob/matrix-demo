import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

export const StyleCustomTable = styled(DataGrid)(({ theme, props }) => ({
  ".MuiDataGrid-columnHeadersInner ": {
    backgroundColor: "#47507A !important",
    fontFamily: "Poppins !important",
    color: "#fff",
    fontWeight: 600,
    ".MuiButtonBase-root": {
      color: "#fff",
    },
    ".MuiButtonBase-root.Mui-checked": {
      color: "#fff",
    },
    ".MuiDataGrid-columnHeader:focus": {
      outline: "solid #fff 1px",
    },
  },
  ".MuiDataGrid-row": {
    fontFamily: "Poppins !important",
    ".MuiDataGrid-cell:focus": {
      outline: "solid #47507A 1px",
    },
  },
  ".MuiDataGrid-virtualScroller": {
    ".MuiButtonBase-root": {
      color: "#47507A",
    },
    ".MuiButtonBase-root.Mui-checked": {
      color: "#47507A",
    },
  },
  ".MuiDataGrid-footerContainer": {
    fontFamily: "Poppins",
    ".MuiTablePagination-selectLabel": {
      fontFamily: "Poppins !important",
    },
  },
}));
