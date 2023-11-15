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
import { CustomDatePicker } from "../shared/CustomDatePicker";
import { SubmitButton } from "../../styles/CustomButton";
import CustomAgGrid from "../shared/CustomAgGrid";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export const DateBirth = styled("div")(({ theme }) => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  borderBottom: "1px solid grey",
  width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

export const Label = styled("div")(({ theme }) => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  fontSize: "14px",
  // borderBottom: "1px solid grey",
  // width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

export const SmallEditableComp = styled("div")(({ theme }) => {
  console.log(" theme ", theme?.width);
  return {
    border: "1px solid #757575 !important",
    padding: "5px",
    width: theme?.width || "25px",
    maxWidth: theme?.width || "25px",
    overflow: "hidden",
    whiteSpace: "pre",
    textAlign: "center",
  };
});

export const TableStyle = styled("table")(({ theme }) => ({
  borderCollapse: "collapse",
  width: "100%",
  fontFamily: "Poppins",
  fontSize: "12px",
  maxWidth: "calc(100vw - 20px)",
  overflow: "auto",
  color: "#757575",
  // border: "1px solid green",
  th: {
    border: "1px solid #757575",
    textAlign: "left",
    padding: "8px",
  },
  td: {
    border: "1px solid #757575",
    textAlign: "left",
    padding: "8px",
  },
  th: {
    border: "1px solid #757575",
    // backgroundColor: "#f2f2f2",
  },
}));

function OnboardForm() {
  // const docs = [
  //   { uri: cms1500Form }, // Local File
  // ];
  return (
    <Box
      sx={{
        // backgroundColor: "#EEEEEE",
        // height: "100vh",
        padding: 4,
      }}
    >
      <Typography
        className="customClass"
        sx={{
          fontWeight: 600,
          letterSpacing: 1.5,
          color: "#565965",
          fontSize: "18px",
          textTransform: "capitalize",
        }}
        variant="subtitle1"
        // gutterBottom
      >
        Health Insurance Claim Form
      </Typography>
      <Typography
        className="customClass"
        sx={{
          letterSpacing: 1.5,
          color: "#565965",
          fontSize: "12px",
          textTransform: "capitalize",
        }}
        variant="subtitle2"
        gutterBottom
      >
        Approved By National Uniform Claim Committee (NUCC) O2M2
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={12 / 7}>
              <Label>Medicare</Label>
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
                label="(Medicare#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>Medicaid</Label>
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
                label="(medicaid#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>Tricafe</Label>
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
                label="(ID#/DOD#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>Champva</Label>
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
                label="(Member ID#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>Group Health Plan</Label>
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
                label="(ID#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>FECA BLKLUNG</Label>
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
                label="(ID#)"
              />
            </Grid>
            <Grid item xs={12 / 7}>
              <Label>Other</Label>
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
                label="(ID#)"
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "10px" }}>Insured's ID number</Label>
            <TextFeildComp
              type="text"
              label="Id no"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Patient's Name</Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <Grid item xs={12}>
              <Label> Patient Date Of Birth</Label>
            </Grid>
            <Grid item xs={12} paddingY={2}>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date of birth"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item container xs={4}>
            <Grid item xs={12}>
              <Label> Sex</Label>
            </Grid>
            <Grid item xs={12}>
              <CustomRadio
                // label={"Sex"}
                name={"campaignTypeId"}
                inputValues={[
                  { id: 1, name: "Male", value: "Male" },
                  { id: 2, name: "Female", value: "Female" },
                ]}
                style={{ flexDirection: "row", marginTop: 0 }}
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
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Insured's Name</Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Patient's Address</Label>
            </Grid>
            <Grid item xs={12 / 5}>
              <TextFeildComp
                type="text"
                label="No street"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="City"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="State"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Zip Code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Telephone"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={12}>
              <Label>Patient Relationship To Injured</Label>
            </Grid>
            <Grid item xs={12 / 4}>
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
                label="(Self)"
              />
            </Grid>
            <Grid item xs={12 / 4}>
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
                label="(Spouse)"
              />
            </Grid>
            <Grid item xs={12 / 4}>
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
                label="(Child)"
              />
            </Grid>
            <Grid item xs={12 / 4}>
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
                label="(Others)"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Insured's Address</Label>
            </Grid>
            <Grid item xs={12 / 5}>
              <TextFeildComp
                type="text"
                label="No street"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="City"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="State"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Zip Code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Telephone"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>
                Other Insured's Name
              </Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "20px" }}>
                Other Insured's Policy Number
              </Label>
              <TextFeildComp
                type="text"
                label="Policy Number"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2} paddingLeft={1}>
              <Label style={{ marginBottom: "20px" }}>
                Reserved For Nucc use
              </Label>
              <TextFeildComp
                type="text"
                label="Nucc use"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2} paddingLeft={1}>
              <Label style={{ marginBottom: "20px" }}>
                Reserved For Nucc use
              </Label>
              <TextFeildComp
                type="text"
                label="Nucc use"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} paddingLeft={1}>
              <Label style={{ marginBottom: "20px" }}>
                Insurance Plan Name or programe name
              </Label>
              <TextFeildComp
                type="text"
                label="Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={12}>
              <Label>Is Patient's condition related to </Label>{" "}
            </Grid>
            <Grid item xs={3}>
              <Label>Employment? (Current or Previous) </Label>
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
                label="Yes"
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
                label="No"
              />
            </Grid>
            <Grid item xs={2}>
              <Label>Auto Accident? </Label>
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
                label="Yes"
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
                label="No"
              />
            </Grid>
            <Grid item xs={2} sx={{ paddingRight: 2 }}>
              <Label style={{ marginBottom: "15px" }}>Place(State)</Label>
              <TextFeildComp
                type="text"
                label="Place"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <Label>Other Accident? </Label>
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
                label="Yes"
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
                label="No"
              />
            </Grid>
            <Grid item xs={3}>
              <Label style={{ marginBottom: "15px" }}>
                Claim Codes (Designed by Nucc)
              </Label>
              <TextFeildComp
                type="text"
                label="Claim code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "20px" }}>
              Insured's Plicy group or FECA number
            </Label>
            <TextFeildComp
              type="text"
              label="FECA number"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={3}>
              <Label style={{ marginBottom: "15px" }}>
                Insured's Date Birth
              </Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date of birth"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={2} sx={{ marginLeft: 3 }}>
              <Label>Sex</Label>
              <CustomRadio
                // label={"Sex"}
                name={"campaignTypeId"}
                inputValues={[
                  { id: 1, name: "Male", value: "Male" },
                  { id: 2, name: "Female", value: "Female" },
                ]}
                style={{ flexDirection: "row", marginTop: 15 }}
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
            </Grid>
            <Grid item xs={3} sx={{ paddingLeft: 1 }}>
              <Label style={{ marginBottom: "20px" }}>
                Other Claim Id (Designated by NUCC)
              </Label>
              <TextFeildComp
                type="text"
                label="Claim Id"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} sx={{ paddingLeft: 1 }}>
              <Label style={{ marginBottom: "20px" }}>
                Insurance Plan Name Or Programe Name
              </Label>
              <TextFeildComp
                type="text"
                label="Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <Label>Is There Another Health Benifit Plan?</Label>
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
                label="Yes"
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
                label="No"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "15px" }}>
                Date Of Current Illness Injury or Pregnancy (LMP)
              </Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={4} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "15px" }}>Qual</Label>
              <TextFeildComp
                type="text"
                label="Qual"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "15px" }}>Other Date</Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={4} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "15px" }}>Qual</Label>
              <TextFeildComp
                type="text"
                label="Qual"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "15px" }}>
                Dates Patient Unable to work in current occupation
              </Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"From"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={4} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "45px" }}></Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"To"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "15px" }}>
                Name Of Reffering Programer Or Other source
              </Label>
              <TextFeildComp
                type="text"
                label="Other source"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "15px" }}>
                Hospitalization Dates Realated To Current Services
              </Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"From"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={4} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "45px" }}></Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"To"}
                name={"scheduleDate"}
                // isViewMode={expiredTime() || isViewMode}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item constainer xs={4} sx={{ paddingLeft: 2 }}>
            <Label style={{ marginBottom: "15px" }}>
              Aditional Claim information (Designed by NUCC)
            </Label>
            <TextFeildComp
              type="text"
              label="Claim Information"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs="8"></Grid>
          <Grid item xs={4} sx={{ paddingLeft: 2 }}>
            <Label style={{ marginBottom: "15px" }}>Outside Lab</Label>
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
              label="Yes"
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
              label="No"
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Charges</Label>
            <TextFeildComp
              type="text"
              label="Charges"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid Item container paddingLeft={2} xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "15px" }}>
                {" "}
                Diagnosis Or Nature Of Illness Or Injury Relate A-L to service
                Line below (24E)
              </Label>
            </Grid>
            <Grid item xs={3}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="C"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="D"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextFeildComp
                type="text"
                label="E"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="F"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="G"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="H"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextFeildComp
                type="text"
                label="I"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="J"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="K"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="L"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Resubmission Code</Label>
            <Grid>
              <TextFeildComp
                type="text"
                label="Code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Original Ref No</Label>
            <Grid>
              <TextFeildComp
                type="text"
                label="Ref No"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>
              Prize Authorization Number
            </Label>
            <TextFeildComp
              type="text"
              label="Authorization Number"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={12}>
            <Label>Federal Tax I.D Number</Label>
          </Grid>
          <Grid item xs={4}>
            <TextFeildComp
              type="text"
              label="Id Number"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextFeildComp
              type="text"
              label="SSN"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextFeildComp
              type="text"
              label="EIN"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Label>Patients Account No</Label>
            <TextFeildComp
              type="text"
              label="Account Number"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={8}>
            <Label>Accept Asignment?</Label>
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
              label="Yes"
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
              label="No"
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Total Charge</Label>
            <TextFeildComp
              type="text"
              label="Total Charge"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Amount Paid</Label>
            <TextFeildComp
              type="text"
              label="Amount Paid"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>PlsVd for NUCC Use</Label>
            <TextFeildComp
              type="text"
              label="PlsVd"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TableStyle>
              <thead>
                <tr
                  style={{
                    marginBottom: "20px",
                    borderBottom: "1px solid green",
                  }}
                >
                  <th colspan="2">A. Dates of service</th>
                  <th colspan="1">B.</th>
                  <th colspan="1">C.</th>
                  <th colspan="2">D. Procedure services or supplies</th>
                  <th colspan="1">E.</th>
                  <th colspan="1">F.</th>
                  <th colspan="1">G.</th>
                  <th colspan="1">H.</th>
                  <th colspan="1">I.</th>
                  <th colspan="1">J.</th>
                </tr>
                <tr
                  style={{
                    marginBottom: "20px",
                    borderBottom: "1px solid green",
                  }}
                >
                  <th colspan="1">From</th>
                  <th colspan="1">To</th>
                  <th></th>
                  <th></th>
                  <th colspan="2">(Explain unusual Circumferance)</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Rendering</th>
                </tr>
                <tr>
                  <th>
                    <span>MM</span>
                    <span style={{ marginLeft: "5px" }}>DD</span>
                    <span style={{ marginLeft: "5px" }}>YY</span>
                  </th>
                  <th>
                    <span>MM</span>
                    <span style={{ marginLeft: "5px" }}>DD</span>
                    <span style={{ marginLeft: "5px" }}>YY</span>
                  </th>
                  <th>Diagnosis Pointer</th>
                  <th>Emg</th>
                  <th colspan="1">CPT/HCPCS</th>
                  <th colspan="1">Modifier</th>
                  <th> Diagnosis Pointer</th>
                  <th> Charges </th>
                  <th>Days Or Units</th>
                  <th>Deposity Fertility plan</th>
                  <th>ID Qual</th>
                  <th>Provider ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div>NPI</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div>NPI</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div>NPI</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                      <SmallEditableComp contentEditable>07</SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div>NPI</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SmallEditableComp
                        contentEditable
                        theme={{ width: "100%" }}
                      >
                        07
                      </SmallEditableComp>
                    </div>
                  </td>
                </tr>
              </tbody>
            </TableStyle>
          </Grid>
        </Grid>
      </Box>

      {/* <Container sx={{ position: "relative" }} maxWidth="sm">
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
      </Container> */}
    </Box>
  );
}

export default OnboardForm;
