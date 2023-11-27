import { Grid, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import { CustomFileUpload } from "../components/shared/CustomFileUpload";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import OnboardForm from "../components/client/OnboardForm";
import ChatBox from "../components/shared/ChatBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 80,
    width: "100%",
    backgroundColor: "#227DED",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "600",
    fontSize: "15px",
    marginRight: "8px",
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Poppins",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
    "&.MuiTab-root": {
      color: "#3A5186",
      fontFamily: "Poppins",
      fontWeight: "600",
      textTransform: "capitalize",
      letterSpacing: "1px",
    },
  })
);

export const StyledChatBoxContainer = styled(Box)(({ theme, props }) => {
  return {
    position: "fixed",
    transition: "top 0.5s ease-in-out",
    top: "100%",
    right: "100px",
    "&.show": {
      top: "100px !important",
    },
  };
});

const OnBoardForm = () => {
  const [tabValue, setTabValue] = useState("one");
  const [showChatBox, setShowChatBox] = useState(false);

  const [uploadFile, setUploadFile] = useState("");

  const handleTabChange = (event, newvalue) => {
    setTabValue(newvalue);
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <StyledTabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="wrapped label tabs example"
        >
          <StyledTab value="one" label="Client Details" />
          <StyledTab value="two" label="Contract" />
        </StyledTabs>
        <TabPanel value={tabValue} index={"one"}>
          <OnboardForm />
        </TabPanel>
        <TabPanel value={tabValue} index={"two"}>
          <Paper
            sx={{
              padding: "16px 24px",
              minheight: "calc(100vh - 175px)",
              overflow: "hidden",
              // marginBottom: 1,
              marginTop: -1,
            }}
            elevation={0}
          >
            <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CustomFileUpload
                    // accept={`${fileTypeCheck()?.[0].name.toLowerCase()}/*`}
                    label={"Upload File*"}
                    name={"chargeFile"}
                    type={"file"}
                    // disabled={isViewMode}
                    // errors={errors}
                    // touched={touched}
                    value={uploadFile}
                    onChange={(e) => {
                      // setFieldValue("chargeFile", e.target.files[0]);
                      setUploadFile(e.target.files[0]);
                      // hanlePreviewClick();
                    }}
                  />
                </Grid>
                {/* <Grid item xs={4}>
                  <Button onClick={() => setShowChatBox(true)}>Click</Button>
                </Grid> */}
                <ChatBox setShowChatBox={setShowChatBox} />
                {/* <StyledChatBoxContainer className={showChatBox && "show"}>
                  <ChatBox setShowChatBox={setShowChatBox} />
                </StyledChatBoxContainer> */}
              </Grid>
            </Box>
          </Paper>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default OnBoardForm;
