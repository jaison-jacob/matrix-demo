import { Box, Button, Grid, Typography } from "@mui/material";
import TextFeildComp from "../shared/TextFeildComp";
import CustomSelectFeild from "../shared/CustomSelectFeild";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import PersonOutlineIcon from "@mui/icons-material/Person";
import styled from "styled-components";
import CustomTextArea from "../shared/CustomTextArea";
import CustomCheckBox from "../shared/CustomCheckBox";
import CustomRadio from "../shared/CustomRadio";
import { SubmitButton } from "../../styles/CustomButton";

export const DateBirth = styled("div")(({ theme }) => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  borderBottom: "1px solid grey",
  width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

function OnboardForm() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container sx={{ position: "relative" }} maxWidth="sm">
        <Paper elevation={3} sx={{ paddingY: 2 }}>
          <Box
            sx={{
              width: 50,
              height: 55,
              backgroundColor: "#D92866",
              borderRadius: 1,
              position: "absolute",
              top: -20,
              left: 40,
              boxShadow: "0px 10px 10px -10px #D92866",
            }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <EmailIcon sx={{ color: "#fff" }} />
            </Stack>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 15,
              left: 100,
              fontFamily: "Poppins",
            }}
          >
            Onboarding Form
          </Box>
          <Box
            sx={{
              marginTop: 4,
              height: "calc(100vh - 230px)",
              overflowY: "auto",
              padding: 2,
            }}
          >
            <TextFeildComp
              type="text"
              label="Name"
              endormentIcon={<PersonOutlineIcon />}
            />

            <CustomSelectFeild
              label="Gender"
              menuOption={[
                { val: 1, label: "Male" },
                { val: 2, label: "Female" },
              ]}
            />
            <TextFeildComp type="number" label="Weight" />
            <TextFeildComp type="number" label="Height" />
            <TextFeildComp type="email" label="Email" />
            <TextFeildComp type="text" label="Reason For seeing Doctor" />
            <Box>
              <DateBirth>Date Of Birth</DateBirth>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CustomSelectFeild
                    label="Month"
                    menuOption={[
                      { val: 1, label: "Jan" },
                      { val: 2, label: "Feb" },
                      { val: 3, label: "Mar" },
                      { val: 4, label: "Apr" },
                      { val: 5, label: "May" },
                      { val: 6, label: "Jun" },
                      { val: 7, label: "Jul" },
                      { val: 8, label: "Aug" },
                      { val: 8, label: "Sep" },
                      { val: 10, label: "Oct" },
                      { val: 11, label: "Nov" },
                      { val: 12, label: "Dec" },
                    ]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomSelectFeild
                    label="Day"
                    menuOption={[
                      { val: 1, label: "1" },
                      { val: 2, label: "2" },
                      { val: 3, label: "3" },
                      { val: 4, label: "4" },
                      { val: 5, label: "5" },
                      { val: 6, label: "6" },
                      { val: 7, label: "7" },
                      { val: 8, label: "8" },
                      { val: 8, label: "9" },
                      { val: 10, label: "10" },
                      { val: 11, label: "11" },
                      { val: 12, label: "12" },
                      { val: 13, label: "13" },
                      { val: 14, label: "14" },
                      { val: 15, label: "15" },
                      { val: 16, label: "16" },
                      { val: 17, label: "17" },
                      { val: 18, label: "18" },
                      { val: 19, label: "19" },
                      { val: 20, label: "20" },
                      { val: 21, label: "21" },
                      { val: 22, label: "22" },
                      { val: 23, label: "23" },
                      { val: 24, label: "24" },
                      { val: 25, label: "25" },
                      { val: 26, label: "26" },
                      { val: 27, label: "27" },
                      { val: 28, label: "28" },
                      { val: 29, label: "29" },
                      { val: 30, label: "30" },
                      { val: 31, label: "31" },
                    ]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomSelectFeild
                    label="Year"
                    menuOption={[
                      { val: 1, label: "2023" },
                      { val: 2, label: "2022" },
                      { val: 3, label: "2021" },
                      { val: 4, label: "2020" },
                      { val: 5, label: "2019" },
                      { val: 6, label: "2018" },
                      { val: 7, label: "2017" },
                      { val: 8, label: "2016" },
                      { val: 8, label: "2015" },
                      { val: 10, label: "2014" },
                      { val: 11, label: "2013" },
                      { val: 12, label: "2012" },
                    ]}
                  />
                </Grid>
              </Grid>
            </Box>
            <DateBirth>Medical History</DateBirth>
            <CustomTextArea
              label={"About Story*"}
              name={"story"}
              // value={values.story}
              maxRows={12}
              minRows={6}
              // onChange={handleChange}
              // errors={errors}
              // isViewMode={isViewMode}
              // onBlur={handleBlur}
              // touched={touched}
            />
            <DateBirth style={{ marginTop: "20px" }}>
              Have you ever had (Please check all that apply)
            </DateBirth>
            <CustomCheckBox
              inputProps={{ "aria-label": "controlled" }}
              // checked={
              //   values?.roleAccess?.find(
              //     (item) => item?.contentMenuId === value?.id
              //   ) || false
              // }
              // isViewMode={isViewMode}
              // name={value.name}
              // onChange={(e) => {
              //   if (e.target.checked) {
              //     let copyRole = JSON.parse(JSON.stringify(roleAccess));
              //     copyRole.push({
              //       contentMenuId: value.id,
              //       isAllowed: 1,
              //     });
              //     setRoleAccess([...copyRole]);
              //     setFieldValue("roleAccess", [...copyRole]);
              //   } else {
              //     console.log(roleAccess);

              //     let copyRole = JSON.parse(JSON.stringify(roleAccess));
              //     copyRole.forEach((item, index) => {
              //       if (item?.contentMenuId === value?.id) {
              //         copyRole.splice(index, 1);
              //       }
              //     });
              //     setRoleAccess([...copyRole]);
              //     setFieldValue("roleAccess", [...copyRole]);
              //   }
              // }}
              label="Anemia"
            />
            <CustomCheckBox
              inputProps={{ "aria-label": "controlled" }}
              // checked={
              //   values?.roleAccess?.find(
              //     (item) => item?.contentMenuId === value?.id
              //   ) || false
              // }
              // isViewMode={isViewMode}
              // name={value.name}
              // onChange={(e) => {
              //   if (e.target.checked) {
              //     let copyRole = JSON.parse(JSON.stringify(roleAccess));
              //     copyRole.push({
              //       contentMenuId: value.id,
              //       isAllowed: 1,
              //     });
              //     setRoleAccess([...copyRole]);
              //     setFieldValue("roleAccess", [...copyRole]);
              //   } else {
              //     console.log(roleAccess);

              //     let copyRole = JSON.parse(JSON.stringify(roleAccess));
              //     copyRole.forEach((item, index) => {
              //       if (item?.contentMenuId === value?.id) {
              //         copyRole.splice(index, 1);
              //       }
              //     });
              //     setRoleAccess([...copyRole]);
              //     setFieldValue("roleAccess", [...copyRole]);
              //   }
              // }}
              label="Asthma"
            />
            <TextFeildComp type="text" label="Other illnesses" />
            <CustomTextArea
              label={"Please list any Operations and Dates of Each"}
              name={"story"}
              // value={values.story}
              maxRows={12}
              minRows={6}
              // onChange={handleChange}
              // errors={errors}
              // isViewMode={isViewMode}
              // onBlur={handleBlur}
              // touched={touched}
            />
            <CustomTextArea
              label={"Please list your Current Medications"}
              name={"story"}
              // value={values.story}
              maxRows={12}
              minRows={6}
              // onChange={handleChange}
              // errors={errors}
              // isViewMode={isViewMode}
              // onBlur={handleBlur}
              // touched={touched}
            />
            <CustomRadio
              label={"Exercise"}
              name={"campaignTypeId"}
              inputValues={[
                { id: 1, name: "Never", value: "Never" },
                { id: 2, name: "1-2 days", value: "1-2 days" },
                { id: 3, name: "3-4 days", value: "3-4 days" },
              ]}
              // value={values.campaignTypeId}
              // onChange={(e) => {
              //   setFieldValue("campaignTypeId", e.target.value);
              //   setFieldValue("campaignFile", "");
              //   setFieldValue("campaignFileName", "");
              // }}
              // disabled={isViewMode}
              // errors={errors}
              // touched={touched}
            />
          </Box>
          <Stack flexDirection={"row"} justifyContent={"end"} marginRight={2}>
            <SubmitButton variant="contained">Submit</SubmitButton>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default OnboardForm;
