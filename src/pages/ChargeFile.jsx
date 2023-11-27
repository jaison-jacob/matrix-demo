import { Box } from "@mui/material";
import { read, utils } from "xlsx";
import { useState } from "react";
import CustomTable from "../components/shared/CustomTable";
import CustomLoader from "../components/shared/CustomLoader";
import { SubmitButton } from "../styles/CustomButton";

const ChargeFile = () => {
  const [tableData, setTableData] = useState({
    headCells: [],
    boddyCells: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const hanlePreviewClick = () => {
    setIsLoading(true);
    fetch("/assert/HUmana_Mock.xlsx")
      .then((response) => response.arrayBuffer())
      .then((data) => {
        setTimeout(() => {
          const workbook = read(data, { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = utils.sheet_to_json(firstSheet, { header: 1 });
          //   let headerData = ["Id", ...jsonData[0]];
          let headerData = ["id", ...jsonData[0]];

          const headCells = headerData.map((item) => {
            return {
              field: item.replace(/\s/g, ""),
              headerName: item,
              width: 170,
              editable: true,
            };
          });

          const boddyCells = [];

          jsonData.forEach((item, index) => {
            if (index != 0) {
              let constructData = {};
              jsonData[0].forEach((item, innerIndex) => {
                let key = String(item.replace(/\s/g, ""));
                constructData[key] = jsonData[index][innerIndex] ?? "";
              });
              constructData.id = index;
              boddyCells.push(constructData);
            }
          });


          // serviceAndReason.value = jsonData;
          setTableData({
            headCells: [...headCells],
            boddyCells: [...boddyCells],
          });
          setIsLoading(false);
        }, 3000);
      });
  };

  return (
    <Box
      sx={{
        marginLeft: 5,
        marginRight: 5,
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {isLoading && <CustomLoader />}

      {tableData.headCells.length <= 0 && tableData.boddyCells.length <= 0 && (
        <SubmitButton
          style={{ position: "absolute", top: 40, left: 30 }}
          variant="contained"
          onClick={() => hanlePreviewClick()}
        >
          Preview
        </SubmitButton>
      )}

      {tableData.headCells.length > 0 && tableData.boddyCells.length > 0 && (
        <CustomTable tableData={tableData} />
      )}
    </Box>
  );
};

export default ChargeFile;
