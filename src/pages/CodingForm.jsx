import { Box, Button, Grid, Paper, Tooltip, Typography } from "@mui/material";
import TextFeildComp from "../components/shared/TextFeildComp";
import styled from "styled-components";
import CustomCheckBox from "../components/shared/CustomCheckBox";
import CustomRadio from "../components/shared/CustomRadio";
import { CustomDatePicker } from "../components/shared/CustomDatePicker";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import { FlexContainer } from "../components/styled-components/Global.styled";
import Preview from "../components/Preview/Preview";
import { useState } from "react";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export const DateBirth = styled("div")(() => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  borderBottom: "1px solid grey",
  width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

export const Label = styled("div")(() => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  fontSize: "13px",
  // borderBottom: "1px solid grey",
  // width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

export const FormGroupHeader = styled("div")(() => ({
  color: "#ffff !important",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 600,
  marginTop: 10,
  padding: "8px 12px",
  backgroundColor: "#2078E0",
  letterSpacing: "1px",
  borderRadius: "4px",
}));

export const SmallEditableComp = styled("div")(({ theme }) => {
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

export const TableStyle = styled("table")(() => ({
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
}));

function OnboardForm() {
  // const docs = [
  //   { uri: cms1500Form }, // Local File
  // ];'
  const [showPreview, setShowPreview] = useState(false);
  return (
    <Paper
      sx={{
        padding: "16px 24px",
        // height: "calc(100vh - 120px)",
        overflow: "hidden",
        marginBottom: 5,
      }}
      elevation={0}
    >
      {/* <Breadcrumb title="Health Insurance Claim Form" /> */}
      {/* <Typography
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
      </Typography> */}
      {/* <Typography
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
      </Typography> */}
      <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroupHeader
              style={{ fontSize: "16px", color: "#3A3F4C!important" }}
            >
              Patients Details
            </FormGroupHeader>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12 / 7}>
              <Label>Medicare</Label>
              <CustomCheckBox
                checked="true"
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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

          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Patients Name</Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                value="Davis"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                value="Christine"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <Grid item xs={12} paddingBottom={2}>
              <Label> Patient Date Of Birth</Label>
            </Grid>
            <Grid item xs={12}>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date of birth"}
                name={"scheduleDate"}
                value={new Date("10/11/1993")}
                isViewMode={true}
                // minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          {/* <Grid item xs={1}></Grid> */}
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
                value={1}
                // defaultValue={"1"}
                // onChange={(e) => {
                //   setFieldValue("campaignTypeId", e.target.value);
                //   setFieldValue("campaignFile", "");
                //   setFieldValue("campaignFileName", "");
                // }}
                disabled={true}
                // errors={errors}
                // touched={touched}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Patients Address</Label>
            </Grid>
            <Grid item xs={12 / 5}>
              <TextFeildComp
                type="text"
                label="No street"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="1 Beverly Drive E6"
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="City"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="abington"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="State"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="PA"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Zip Code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="14219"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Telephone"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="(218) 8173931"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={12}>
              <Label>Patient Relationship To Injured</Label>
            </Grid>
            <Grid item xs={12 / 4} display={"flex"} columnGap={"20px"}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
            {/* <Grid item xs={12 / 4}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
            </Grid> */}
            {/* <Grid item xs={12 / 4}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
            </Grid> */}
            {/* <Grid item xs={12 / 4}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
            </Grid> */}
          </Grid>

          <Grid item container>
            <Grid item xs={12}>
              <Label>Is Patients condition related to </Label>{" "}
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
                isViewMode={true}
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
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
                isViewMode={true}
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
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                disabled={true}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label>
                Read Back Form Before Completing & Signing This form
              </Label>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <Label>
                Patients Or Authorized Persons signature I authorize the release
                of any medical or other information necessary to process this
                claim. I also request payment of government benifits either to
                myself or to the party who accepts assignment below
              </Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="Sign"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>

          {/* insurance group */}
          <Grid item xs={12}>
            <FormGroupHeader
              style={{ fontSize: "16px", color: "#3A3F4C!important" }}
            >
              Insurance Details
            </FormGroupHeader>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "10px" }}>Insureds ID number</Label>
            <TextFeildComp
              type="text"
              label="Id no"
              value="A456789"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Insureds Name</Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                value="David"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                value="George"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>Insureds Address</Label>
            </Grid>
            <Grid item xs={12 / 5}>
              <TextFeildComp
                type="text"
                label="No street"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="1 Beverly Drive E6"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="City"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="Abington"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="text"
                label="State"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="PA"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Zip Code"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="14219"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12 / 5} paddingLeft={1}>
              <TextFeildComp
                type="number"
                label="Telephone"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="(219) 8173931"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "10px" }}>
                Other Insureds Name
              </Label>
            </Grid>
            <Grid item xs={4} paddingY={1} paddingRight={1}>
              <TextFeildComp
                type="text"
                label="Last Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="First Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} padding={1}>
              <TextFeildComp
                type="text"
                label="Middle Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} columnGap={2}>
            <Grid item xs={3.5}>
              <Label style={{ marginBottom: "10px" }}>
                Other Insureds Policy Number
              </Label>
              <TextFeildComp
                type="text"
                label="Policy Number"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="54372"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "10px" }}>
                Reserved For Nucc use
              </Label>
              <TextFeildComp
                type="text"
                label="Nucc use"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="98768743"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} marginBottom={2}>
              <Label style={{ marginBottom: "10px" }}>
                Reserved For Nucc use
              </Label>
              <TextFeildComp
                type="text"
                label="Nucc use"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="687332"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3.5}>
              <Label style={{ marginBottom: "10px" }}>
                Insurance Plan Name or programe name
              </Label>
              <TextFeildComp
                type="text"
                label="Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "10px" }}>
                Insureds Plicy group or FECA number
              </Label>
              <TextFeildComp
                type="text"
                label="FECA number"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="765237653276"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Label style={{ marginBottom: "10px" }}>
                Insureds Date Birth
              </Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date of birth"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date("27/08/1994")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} columnGap={2}>
            <Grid item xs={3.5}>
              <Label style={{ marginBottom: "10px" }}>
                Other Claim Id (Designated by NUCC)
              </Label>
              <TextFeildComp
                type="text"
                label="Claim Id"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="98379"
                disabled={true}
              />
            </Grid>

            <Grid item xs={4}>
              <Label style={{ marginBottom: "10px" }}>
                Insurance Plan Name Or Programe Name
              </Label>
              <TextFeildComp
                type="text"
                label="Name"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Label>Is There Another Health Benifit Plan?</Label>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
              <Label>Sex</Label>
              <CustomRadio
                // label={"Sex"}
                name={"campaignTypeId"}
                inputValues={[
                  { id: 1, name: "Male", value: "Male" },
                  { id: 2, name: "Female", value: "Female" },
                ]}
                style={{ flexDirection: "row", marginTop: 1 }}
                value={1}
                // onChange={(e) => {
                //   setFieldValue("campaignTypeId", e.target.value);
                //   setFieldValue("campaignFile", "");
                //   setFieldValue("campaignFileName", "");
                // }}
                disabled={true}
                // errors={errors}
                // touched={touched}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label>Insureds Or Authorized Person Signature</Label>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <Label>
                authorize payment of medical benefits to the undersigned
                physician or suppliers for services describe below
              </Label>
            </Grid>
            <Grid item xs={5}>
              <TextFeildComp
                type="text"
                label="Sign"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={5}>
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
                isViewMode={true}
                minDate={new Date("10/09/1994")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "15px" }}>Qual</Label>
              <TextFeildComp
                type="text"
                label="Qual"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={5}>
              <Label style={{ marginBottom: "15px" }}>Other Date</Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date("08/08/1994")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "15px" }}>Qual</Label>
              <TextFeildComp
                type="text"
                label="Qual"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={5}>
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
                isViewMode={true}
                minDate={new Date("09/09/1996")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "45px" }}></Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"To"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date("14/09/1996")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "15px" }}>
                Name Of Reffering Programer Or Other source
              </Label>
            </Grid>
            <Grid item xs={5}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="DN"
                disabled={true}
              />
            </Grid>
            <Grid item xs={5} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="DR Mark Jenkins"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={5}>
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
                isViewMode={true}
                minDate={new Date("10/10/2000")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: 2 }}>
              <Label style={{ marginBottom: "45px" }}></Label>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"To"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date("10/10/2000")}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item constainer xs={5} sx={{ paddingLeft: 2 }}>
            <Label style={{ marginBottom: "15px" }}>
              Aditional Claim information (Designed by NUCC)
            </Label>
            <TextFeildComp
              type="text"
              label="Claim Information"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          {/* <Grid item xs="7"></Grid> */}
          <Grid item xs={2} sx={{ paddingLeft: 2 }}>
            <Label style={{ marginBottom: "15px" }}>Outside Lab</Label>
            <Box sx={{ display: "flex", columnGap: "10px" }}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Label style={{ marginBottom: "15px" }}>Charges</Label>
            <TextFeildComp
              type="text"
              label="Charges"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid Item container paddingLeft={2} xs={12} marginTop={2}>
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
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="C"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="D"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="E"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="F"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="G"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="H"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="I"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="J"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="K"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={3} paddingLeft={2} paddingTop={2}>
              <TextFeildComp
                type="text"
                label="L"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
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
                disabled={true}
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
                disabled={true}
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
              isViewMode={true}
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
              isViewMode={true}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFeildComp
              type="text"
              label="SSN"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFeildComp
              type="text"
              label="EIN"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "10px" }}>Patients Account No</Label>
            <TextFeildComp
              type="text"
              label="Account Number"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid item xs={8}>
            <Label>Accept Asignment?</Label>
            <Box display={"flex"} columnGap={2}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                checked={true}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                isViewMode={true}
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
                isViewMode={true}
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
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Total Charge</Label>
            <TextFeildComp
              type="text"
              label="Total Charge"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              value="64"
              disabled={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>Amount Paid</Label>
            <TextFeildComp
              type="text"
              label="Amount Paid"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              value="50"
              disabled={true}
            />
          </Grid>
          <Grid item xs={4}>
            <Label style={{ marginBottom: "15px" }}>PlsVd for NUCC Use</Label>
            <TextFeildComp
              type="text"
              label="PlsVd"
              // endormentIcon={<PersonOutlineIcon />}
              variant="outlined"
              isViewMode={true}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroupHeader style={{ margin: "20px 0" }}>
              Coding Table
            </FormGroupHeader>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TableStyle>
                <thead>
                  <tr
                    style={{
                      marginBottom: "20px",
                      borderBottom: "1px solid green",
                    }}
                  >
                    <th colSpan="2">A. Dates of service</th>
                    <th colSpan="1">B.</th>
                    <th colSpan="1">C.</th>
                    <th colSpan="2">D. Procedure services or supplies</th>
                    <th colSpan="1">E.</th>
                    <th colSpan="1">F.</th>
                    <th colSpan="1">G.</th>
                    <th colSpan="1">H.</th>
                    <th colSpan="1">I.</th>
                    <th colSpan="1">J.</th>
                  </tr>
                  <tr
                    style={{
                      marginBottom: "20px",
                      borderBottom: "1px solid green",
                    }}
                  >
                    <th colSpan="1">From</th>
                    <th colSpan="1">To</th>
                    <th></th>
                    <th></th>
                    <th colSpan="2">(Explain unusual Circumferance)</th>
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
                    <th colSpan="1">CPT/HCPCS</th>
                    <th colSpan="1">Modifier</th>
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Tooltip title="old value: 90658">
                          <SmallEditableComp
                            contentEditable
                            theme={{ width: "100%" }}
                            style={{ backgroundColor: "red", color: "#fff" }}
                          >
                            87635
                          </SmallEditableComp>
                        </Tooltip>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                          style={{ backgroundColor: "#005061", color: "#fff" }}
                        >
                          E11.9
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>NPI</div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                          style={{ backgroundColor: "#005061", color: "#fff" }}
                        >
                          92716
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                          style={{ backgroundColor: "#005061", color: "#fff" }}
                        >
                          I10
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>NPI</div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>NPI</div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                        <SmallEditableComp contentEditable>
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <SmallEditableComp
                          contentEditable
                          theme={{ width: "100%" }}
                        >
                          07
                        </SmallEditableComp>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>NPI</div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label>
                Signature Of Physician Or Supplier Including degrees or
                credential
              </Label>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <Label>
                (I certain that the statements on the reserve apply to this bill
                and are made a part thereof)
              </Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="Sign"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <CustomDatePicker
                // onChange={(value) => {
                //   setFieldValue("scheduleDate", value);
                // }}
                // required
                label={"Date of birth"}
                name={"scheduleDate"}
                isViewMode={true}
                minDate={new Date()}
                fullWidth
                // value={values.scheduleDate}
                // touched={touched}
                // errors={errors}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} marginBottom={2}>
              <Label>Service Facility Location Information</Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="ABC General Store"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} marginBottom={2}>
              <Label>Billing Provider Info</Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="PlipSide"
                disabled={true}
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
                value="Po Box 3120843747"
                disabled={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <FlexContainer>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setShowPreview(true)}
        >
          Preview
        </Button>
        <Button variant="contained" color="success">
          Approve
        </Button>
        <Button variant="contained" color="error">
          Reject
        </Button>
      </FlexContainer>

      {showPreview && <Preview showPreview={() => setShowPreview(false)} />}
    </Paper>
  );
}

export default OnboardForm;
