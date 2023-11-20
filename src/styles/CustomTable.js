import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

export const StyleCustomTable = styled(DataGrid)(({ theme, props }) => ({
  ".css-yrdy0g-MuiDataGrid-columnHeaderRow": {
    backgroundColor: "#47507A !important",
    fontFamily: "Poppins !important",
    color: "#fff",
    fontWeight: 600,
    ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
      color: "#fff",
    },
    ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
      color: "#fff",
    },
    ".css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
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
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
    color: "#47507A",
  },
  ".css-ptkaw2-MuiDataGrid-root": {
    ".MuiDataGrid-cell:focus": {
      outline: "solid #fff 1px",
    },
  },
  ".MuiDataGrid-footerContainer": {
    fontFamily: "Poppins",
    ".css-pdct74-MuiTablePagination-selectLabel": {
      fontFamily: "Poppins !important",
    },
  },
  ".MuiList-root": {
    ".css-10hburv-MuiTypography-root": {
      fontFamily: "Poppins !important",
    },
  },
}));
