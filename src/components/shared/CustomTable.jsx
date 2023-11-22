import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { StyleCustomTable } from "../../styles/CustomTable";

export default function CustomTable(props) {
  const { headCells, boddyCells } = props.tableData;
  return (
    <div
      style={{
        height: props.height ? props.height : "calc(100vh - 130px)",
        width: "100%",
      }}
    >
      <StyleCustomTable
        rows={boddyCells}
        columns={headCells}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection
      />
    </div>
  );
}
