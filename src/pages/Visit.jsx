import React, { useEffect, useState } from "react";
import { patientData } from "../data/patientData";
import { useNavigate } from "react-router-dom";
import { matrixPath } from "../routes/routePath";
import CustomTable from "../components/shared/CustomTable";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { isLoading } from "../redux/action";
import { headerValues } from "../constant/visit";

export default function Visit() {
  const [tableData, setTableData] = useState({
    headCells: [],
    boddyCells: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(isLoading(true));
    setTimeout(() => {
      const headCells = headerValues.map((item) => {
        let headCellItem = {
          field: item.field.replace(/\s/g, ""),
          headerName: item.label,
          width: 170,
          editable: true,
        };
        if (item.field === "assessmentId") {
          headCellItem.renderCell = (params) => {
            return (
              <a
                className="assesment"
                onClick={() => navigate(matrixPath.VISITPATIENT)}
              >
                {params.value}
              </a>
            );
          };
        }
        return headCellItem;
      });

      let boddyCells = patientData.map((item, index) => {
        item.id = index + 1;
        return item;
      });
      setTableData({
        headCells: [...headCells],
        boddyCells: [...boddyCells],
      });
      dispatch(isLoading(false));
    }, 1000);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      {tableData.headCells.length > 0 && tableData.boddyCells.length > 0 && (
        <CustomTable tableData={tableData} />
      )}
    </Box>
  );
}
