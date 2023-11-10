import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

export const StyleCustomTable = styled(DataGrid)(({ theme, props }) => ({
  ".css-yrdy0g-MuiDataGrid-columnHeaderRow": {
    backgroundColor: "#03CDE1 !important",
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
    ".MuiDataGrid-cell:focus": {
      outline: "solid #03CDE1 1px",
    },
  },
  ".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
    color: "#03CDE1",
  },
  ".css-ptkaw2-MuiDataGrid-root": {
    ".MuiDataGrid-cell:focus": {
      outline: "solid #fff 1px",
    },
  },
  ".MuiDataGrid-footerContainer": {
    fontFamily: "Poppins",
    ".css-pdct74-MuiTablePagination-selectLabel": {
      fontFamily: "Poppins",
    },
  },
  ".MuiList-root": {
    ".css-10hburv-MuiTypography-root": {
      fontFamily: "Poppins",
    },
  },
}));
