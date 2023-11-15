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
            <Grid item xs={12}>
              <Label>
                Read Back Form Before Completing & Signing This form
              </Label>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <Label>
                Patient's Or Authorized Persons signature I authorize the
                release of any medical or other information necessary to process
                this claim. I also request payment of government benifits either
                to myself or to the party who accepts assignment below
              </Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="Sign"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
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
            <Grid item xs={12}>
              <Label>Insured's Or Authorized Person Signature</Label>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <Label>
                authorize payment of medical benefits to the undersigned
                physician or suppliers for services describe below
              </Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="Sign"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
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
            <Grid item xs={12}>
              <Label style={{ marginBottom: "15px" }}>
                Name Of Reffering Programer Or Other source
              </Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
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
            <Grid item xs={12}>
              <Label>Service Facility Location Information</Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label>Billing Provider Info</Label>
            </Grid>
            <Grid item xs={4}>
              <TextFeildComp
                type="text"
                label="A"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} paddingLeft={2}>
              <TextFeildComp
                type="text"
                label="B"
                // endormentIcon={<PersonOutlineIcon />}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default OnboardForm;
