import React from "react";
import { PatientInfoWrapper } from "../components/styled-components/PatientInfoPage.styled";
import { patientData } from "../data/patientData";
import { patientInfo } from "../data/patientInfo";
import {
  FlexContainer,
  SizedBox,
} from "../components/styled-components/Global.styled";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import { Box, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import CustomTextarea from "../components/shared/CustomTextArea";

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: "20px 8px",
  textAlign: "center",
  // height: "307px",
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
}));

const StyledInfoKey = styled("label")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  textAlign: "right",
  color: "#0A0A0A",
}));

const StyledInfoValue = styled("label")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "12px",
  marginLeft: "4px",
  textAlign: "left",
  color: "#515151",
  // fontWeight: "600",
}));

// const StyledInfoKey = styled("div")(({ theme }) => ({
//   fontFamily: "Poppins",
//   fontSize: "12px",
//   fontWeight: "600",
//   letterSpacing: "0.5px",
//   textAlign: "right",
//   color: "#0A0A0A",
// }));

// const StyledInfoValue = styled("div")(({ theme }) => ({
//   fontFamily: "Poppins",
//   fontSize: "12px",
//   marginLeft: "16px",
//   textAlign: "left",
//   color: "#515151",
//   // fontWeight: "600",
// }));

const StyledCardTiltle = styled(Box)(({ theme }) => ({
  // textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  marginBottom: "16px",
  // color: "#000000",
  // color: "#2171DE",
  // borderBottom: "2px solid #2171DE",
  width: "fit-content",

  cursor: "pointer",
  color: "#227fed",
  background:
    "linear-gradient(to right,rgba(100, 200, 200, 1),rgba(100, 200, 200, 1)),linear-gradient(to right,rgba(255, 0, 0, 1),rgba(255, 0, 180, 1),rgba(0, 100, 200, 1))",
  backgroundSize: "100% 2px, 0 2px",
  backgroundPosition: "100% 100%, 0 100%",
  backgroundRepeat: "no-repeat",
  transition: "background-size 400ms",
}));

export default function PatientInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Grid container xs={12} spacing={2}>
        <Grid item xs={3.2}>
          <StyledCard
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Box>
              <StyledCardTiltle sx={{ marginBottom: 3 }}>
                Patient Information
              </StyledCardTiltle>
              <Grid container xs={12}>
                <Grid item xs={5}>
                  <StyledInfoKey>First Name: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>{patientData[0].firstName} </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>Last Name: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>{patientData[0].lastName} </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>Date Of Birth: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>
                    {patientData[0].dateOfBirth}{" "}
                  </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>Physician: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>{patientData[0].physician} </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>Provider NPI: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>
                    {patientData[0].providerNPI}{" "}
                  </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>DOS From: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>{patientData[0].lastName} </StyledInfoValue>
                </Grid>

                <Grid item xs={5}>
                  <StyledInfoKey>DOS Through: </StyledInfoKey>
                </Grid>
                <Grid item xs={7} marginBottom={3}>
                  <StyledInfoValue>
                    {patientData[0].DOSthrough}{" "}
                  </StyledInfoValue>
                </Grid>
              </Grid>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item container spacing={2} xs={4.5}>
          <Grid item xs={12}>
            <StyledCard>
              <Box>
                <StyledCardTiltle>Billing Info</StyledCardTiltle>
                <Grid container xs={12}>
                  <Grid item xs={6}>
                    <StyledInfoKey>Total Payments: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.billingInfo.totalPayments}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Total Charges: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.billingInfo.totalCharges}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Insurance Provider: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.billingInfo.insuranceProvider}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Policy Number: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1}>
                    <StyledInfoValue>
                      {patientInfo.billingInfo.policyNumber}{" "}
                    </StyledInfoValue>
                  </Grid>
                </Grid>
              </Box>
            </StyledCard>
          </Grid>
          <Grid item xs={12}>
            <StyledCard>
              <Box>
                <StyledCardTiltle>Encounter Details</StyledCardTiltle>
                <Grid container xs={12}>
                  <Grid item xs={6}>
                    <StyledInfoKey>Date Of Service From: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.encounterDetails.dateOfServiceFrom}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Date Of Service Through: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.encounterDetails.dateOfServiceThrough}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Attending Physician: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1.5}>
                    <StyledInfoValue>
                      {patientInfo.encounterDetails.attendingPhysician}{" "}
                    </StyledInfoValue>
                  </Grid>

                  <Grid item xs={6}>
                    <StyledInfoKey>Provider NPI: </StyledInfoKey>
                  </Grid>
                  <Grid item xs={6} marginBottom={1}>
                    <StyledInfoValue>
                      {patientInfo.encounterDetails.providerNPI}{" "}
                    </StyledInfoValue>
                  </Grid>
                </Grid>
              </Box>
            </StyledCard>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={2}>
          {Object.keys(patientInfo.medicalInfo).map((medicalInfo, i) => {
            return (
              <Grid item xs={6}>
                <StyledCard>
                  <Box>
                    <StyledCardTiltle>{medicalInfo}</StyledCardTiltle>
                    <table id="patientInfo" key={i}>
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientInfo.medicalInfo[medicalInfo].map(
                          (data: any, j: any) => {
                            return (
                              <tr key={j}>
                                {Object.keys(data).map((key, k) => {
                                  return <td key={k}>{data[key]}</td>;
                                })}
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </Box>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid> */}
      <PatientInfoWrapper>
        {/* <Breadcrumb title={"Patient Info"}></Breadcrumb> */}
        <StyledCardTiltle>Patient Information</StyledCardTiltle>
        <FlexContainer style={{ flexWrap: "wrap", columnGap: "30px" }}>
          <div>
            <StyledInfoKey>First Name: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].firstName}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Last Name: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].lastName}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>DOB: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].dateOfBirth}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Physician: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].physician}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Provider NPI: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].providerNPI}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>DOS From: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].DOSFrom}</StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>DOS Through: </StyledInfoKey>
            <StyledInfoValue>{patientData[0].DOSthrough}</StyledInfoValue>
          </div>
        </FlexContainer>
        {/* <SizedBox height={10} /> */}
        {/* <FlexContainer>
          <div>
            <label>Provider NPI: </label>
            <label>{patientData[0].providerNPI}</label>
          </div>
          <div>
            <label>DOS From: </label>
            <label>{patientData[0].DOSFrom}</label>
          </div>
          <div>
            <label>DOS Through: </label>
            <label>{patientData[0].DOSthrough}</label>
          </div>
        </FlexContainer> */}
        <SizedBox height={40} />
        <StyledCardTiltle>Billing Info</StyledCardTiltle>
        <FlexContainer style={{ flexWrap: "wrap", columnGap: "30px" }}>
          <div>
            <StyledInfoKey>Total Payments: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.billingInfo.totalPayments}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Total Charges: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.billingInfo.totalCharges}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Insurance Provider: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.billingInfo.insuranceProvider}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Policy Number: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.billingInfo.policyNumber}
            </StyledInfoValue>
          </div>
        </FlexContainer>

        <SizedBox height={40} />

        <StyledCardTiltle>Encounter Details</StyledCardTiltle>
        <FlexContainer style={{ flexWrap: "wrap", columnGap: "30px" }}>
          <div>
            <StyledInfoKey>Date Of Service From: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.encounterDetails.dateOfServiceFrom}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Date Of Service Through: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.encounterDetails.dateOfServiceThrough}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Attending Physician: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.encounterDetails.attendingPhysician}
            </StyledInfoValue>
          </div>
          <div>
            <StyledInfoKey>Provider NPI: </StyledInfoKey>
            <StyledInfoValue>
              {patientInfo.encounterDetails.providerNPI}
            </StyledInfoValue>
          </div>
        </FlexContainer>
        {/* <SizedBox height={20} /> */}

        {Object.keys(patientInfo.medicalInfo).map((medicalInfo, i) => {
          return (
            <div key={i}>
              <SizedBox height={40} />
              <StyledCardTiltle>{medicalInfo}</StyledCardTiltle>
              <table id="patientInfo" style={{ width: "500px" }}>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {patientInfo.medicalInfo[medicalInfo].map(
                    (data: any, j: any) => {
                      return (
                        <tr key={j}>
                          {Object.keys(data).map((key, k) => {
                            console.log("data[key] ", data[key]);
                            return <td key={k}>{data[key]}</td>;
                          })}
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          );
        })}

        <SizedBox height={40} />
        <StyledCardTiltle>Diagnosis Result</StyledCardTiltle>
        <CustomTextarea
          label={"Result"}
          // name={"story"}
          // value={values.story}
          maxRows={12}
          minRows={6}
          // onChange={handleChange}
          // errors={errors}
          // isViewMode={isViewMode}
          // onBlur={handleBlur}
          // touched={touched}
        />
        {/* <img src={"/diagnosis.jpg"} width={400} /> */}
        <SizedBox height={40} />
        <StyledCardTiltle>Documents</StyledCardTiltle>

        <table id="patientInfo">
          <thead>
            <tr>
              <th>Pdf</th>
              <th>Date</th>
              <th>Property info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PRMA_CHA_HOME_202345758.pdf</td>
              <td>10/3/2023 10:17 PM</td>
              <td>Microsoft Edge PDF 305 KB</td>
            </tr>
            <tr>
              <td>PRMA_CHA_HOME_20457895758.pdf</td>
              <td>10/3/2023 10:17 PM</td>
              <td>Microsoft Edge PDF 315 KB</td>
            </tr>
            <tr>
              <td>PRMA_CHA_HOME_20209765758.pdf</td>
              <td>10/3/2023 10:17 PM</td>
              <td>Microsoft Edge PDF 335 KB</td>
            </tr>
            <tr>
              <td>PRMA_CHA_HOME_20278654558.pdf</td>
              <td>10/3/2023 10:17 PM</td>
              <td>Microsoft Edge PDF 345 KB</td>
            </tr>
          </tbody>
        </table>

        <SizedBox height={20} />
      </PatientInfoWrapper>
    </Box>
  );
}

const TableHead = (object) => {
  return Object.keys(object).map((key, i) => {
    return <th key={i}>{key}</th>;
  });
};
