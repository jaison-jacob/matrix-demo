import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormGroupHeader, Label } from "../../pages/ClaimForm";
import CustomTextField from "../shared/TextFeildComp";
import CustomTextarea from "../shared/CustomTextArea";
import { Button } from "@mui/base";
import { StyleProgressBar } from "../../styles/CustomProgressBar";
import CustomTable from "../shared/CustomTable";
import { useFormik } from "formik";
import { read, utils } from "xlsx";
// import { FormGroupHeader, Label } from "./CodingForm";
import { isLoading } from "../../redux/action";
import CustomLoader from "../shared/CustomLoader";
import CustomCheckBox from "../shared/CustomCheckBox";
import CustomRadio from "../shared/CustomRadio";
import { customDateFormat } from "../../utils/commonUtils";
import { CustomDatePicker } from "../shared/CustomDatePicker";
import { clientheaderValues } from "../../constant/OnboardForm";
import { CustomFileUpload } from "../shared/CustomFileUpload";

const OnboardForm = () => {
  const [tableData, setTableData] = useState({
    headCells: [],
    boddyCells: [],
  });
  const [chargeFileTable, setChargeFileTable] = useState({
    headCells: [],
    boddyCells: [],
  });
  const [loader, setLoader] = useState(false);
  const [chargeFileLoader, setShargeFileLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientDetails: {
        ClientId: "",
        clientName: "",
        clientShortName: "",
        clientAddress: "",
        clientCity: "",
        clientState: "",
        clientZip: "",
        firstClientServiceRep: "",
        secondClientServiceRep: "",
        billingFrequency: "",
        clinicalFrequency: "",
      },
      generalDetails: {
        clientName: "",
        shortName: "",
        fedTaxId: "",
        memberRef: "",
        clientBillingType: "",
        clientType: "",
        securedPhiFax: "",
        activeAsOf: "",
        renewalDate: "",
      },

      physicalAddress: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        firstClientServiceRep: "",
        secondClientServiceRep: "",
      },
      usePhysicalAdress: false,
      maillingAddress: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        clientUrl: "",
        outBoundReferrals: 1,
      },
      chargeFile: "",
    },
    onSubmit: () => handleOnboardForm(),
    // validationSchema: loginFormValidationSchema,
  });

  const {
    handleChange,
    values,
    handleSubmit,
    setFieldValue,
    handleBlur,
    errors,
    touched,
    setValues,
  } = formik;

  const handleOnboardForm = () => {
    setLoader(true);
    setTimeout(() => {
      const headCells = clientheaderValues.map((item) => {
        let headCellItem = {
          field: item.field.replace(/\s/g, ""),
          headerName: item.label,
          width: 170,
          editable: true,
        };
        return headCellItem;
      });
      let boddyCells = [...tableData.boddyCells];
      let data = { ...values.clientDetails };
      data.id = tableData.boddyCells.length + 1;
      boddyCells.push(data);
      setTableData({
        headCells: [...headCells],
        boddyCells: [...boddyCells],
      });
      setLoader(false);
    }, 1000);
  };

  const hanlePreviewClick = () => {
    setShargeFileLoader(true);
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
              //   console.log(constructData, "constructData");
              boddyCells.push(constructData);
            }
          });

          //   console.log("boddyCells ", boddyCells);

          // serviceAndReason.value = jsonData;
          setChargeFileTable({
            headCells: [...headCells],
            boddyCells: [...boddyCells],
          });
          setShargeFileLoader(false);
        }, 3000);
      });
  };

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
      <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroupHeader
              style={{ fontSize: "16px", color: "#3A3F4C!important" }}
            >
              Client Details
            </FormGroupHeader>
          </Grid>
          <Grid item xs={12}>
            <Label style={{ marginBottom: "0px" }}>Client Name</Label>
          </Grid>
          <Grid item container xs={12} columnGap={2} flexWrap="nowrap">
            <Grid item xs={4}>
              <CustomTextField
                label={"Client Id"}
                name={"clientDetails.ClientId"}
                value={values.clientDetails.ClientId}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                label={"Client Name"}
                name={"clientDetails.clientName"}
                value={values.clientDetails.clientName}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3.6}>
              <CustomTextField
                label={"Client Short Name"}
                name={"clientDetails.clientShortName"}
                value={values.clientDetails.clientShortName}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Label style={{ marginBottom: "0px" }}>Client Address</Label>
          </Grid>
          <Grid item container xs={12} columnGap={2} flexWrap="nowrap">
            <Grid item xs={3}>
              <CustomTextarea
                label={"Address"}
                name={"clientDetails.clientAddress"}
                value={values.clientDetails.clientAddress}
                maxRows={12}
                minRows={1}
                onChange={handleChange}
                errors={errors}
                // isViewMode={isViewMode}
                onBlur={handleBlur}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"City"}
                name={"clientDetails.clientCity"}
                value={values.clientDetails.clientCity}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"State"}
                name={"clientDetails.clientState"}
                value={values.clientDetails.clientState}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"Zip"}
                name={"clientDetails.clientZip"}
                value={values.clientDetails.clientZip}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Label style={{ marginBottom: "0px" }}>Client Service</Label>
          </Grid>
          <Grid item container xs={12} columnGap={2} flexWrap="nowrap">
            <Grid item xs={3}>
              <CustomTextField
                label={"1st Clinical Service Rep"}
                name={"clientDetails.firstClientServiceRep"}
                value={values.clientDetails.firstClientServiceRep}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"2nd Client Service Rep"}
                name={"clientDetails.secondClientServiceRep"}
                value={values.clientDetails.secondClientServiceRep}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"Billing Frequency"}
                name={"clientDetails.billingFrequency"}
                value={values.clientDetails.billingFrequency}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField
                label={"Clinical Frequency"}
                name={"clientDetails.clinicalFrequency"}
                value={values.clientDetails.clinicalFrequency}
                onChange={handleChange}
                errors={errors}
                onBlur={handleBlur}
                // isViewMode={isViewMode}
                touched={touched}
              />
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ float: "inline-end" }}
              onClick={() => handleSubmit("Inner-form-submit")}
            >
              Save
            </Button>
          </Grid>
          {/* <CustomLoader /> */}
          {loader && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <StyleProgressBar />
            </Box>
          )}

          <Grid item xs={12}>
            {!loader &&
              tableData.headCells.length > 0 &&
              tableData.boddyCells.length > 0 && (
                <CustomTable tableData={tableData} height={"40vh"} />
              )}
          </Grid>

          <Grid item xs={12}>
            <FormGroupHeader
              style={{ fontSize: "16px", color: "#3A3F4C!important" }}
            >
              Main Details
            </FormGroupHeader>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Label style={{ marginBottom: "15px" }}>General Details</Label>
            </Grid>
            <Grid item container xs={12} columnGap={2} flexWrap="nowrap">
              <Grid item xs={3}>
                <CustomTextField
                  label={"Client Name"}
                  name={"generalDetails.clientName"}
                  value={values.generalDetails.clientName}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"Short Name"}
                  name={"generalDetails.shortName"}
                  value={values.generalDetails.shortName}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"Fed Tax ID"}
                  name={"generalDetails.fedTaxId"}
                  value={values.generalDetails.fedTaxId}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={2.6}>
                <CustomTextField
                  label={"Members Ref"}
                  name={"generalDetails.memberRef"}
                  value={values.generalDetails.memberRef}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              columnGap={2}
              flexWrap="nowrap"
              marginTop={2}
            >
              <Grid item xs={3}>
                <CustomTextField
                  label={"Client Billing Type"}
                  name={"generalDetails.clientBillingType"}
                  value={values.generalDetails.clientBillingType}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"Client Type"}
                  name={"generalDetails.clientType"}
                  value={values.generalDetails.clientType}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"Secured PHI Fax"}
                  name={"generalDetails.securedPhiFax"}
                  value={values.generalDetails.securedPhiFax}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={2.6}>
                <CustomTextField
                  label={"Active"}
                  name={"generalDetails.activeAsOf"}
                  value={values.generalDetails.activeAsOf}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
            </Grid>
            <Grid item container marginTop={2}>
              <Grid item xs={3}>
                <CustomDatePicker
                  label={"Renewal dt"}
                  name={"generalDetails.renewalDate"}
                  onChange={(value) => {
                    setFieldValue(
                      "generalDetails.renewalDate",
                      customDateFormat(value)
                    );
                  }}
                  // isViewMode={isViewMode}
                  minDate={new Date()}
                  value={values.generalDetails.renewalDate}
                  errors={errors}
                  onBlur={handleBlur}
                  touched={touched}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} marginTop={1}>
              <Label style={{ marginBottom: "15px" }}>Physical Address</Label>
            </Grid>
            <Grid item container xs={12} columnGap={2}>
              <Grid item xs={6}>
                <CustomTextField
                  label={"Address 1"}
                  name={"physicalAddress.address1"}
                  value={values.physicalAddress.address1}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={5.7}>
                <CustomTextField
                  label={"Address 2"}
                  name={"physicalAddress.address2"}
                  value={values.physicalAddress.address2}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} marginTop={2} columnGap={2}>
              <Grid item xs={3}>
                <CustomTextField
                  label={"City"}
                  name={"physicalAddress.city"}
                  value={values.physicalAddress.city}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"State"}
                  name={"physicalAddress.state"}
                  value={values.physicalAddress.state}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"Zip"}
                  name={"physicalAddress.zip"}
                  value={values.physicalAddress.zip}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={2.3}>
                <CustomTextField
                  label={"Country"}
                  name={"physicalAddress.country"}
                  value={values.physicalAddress.country}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} marginTop={2} columnGap={2}>
              <Grid item xs={3}>
                <CustomTextField
                  label={"1st Client Service Rep"}
                  name={"physicalAddress.firstClientServiceRep"}
                  value={values.physicalAddress.firstClientServiceRep}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomTextField
                  label={"2nd Client Service Rep"}
                  name={"physicalAddress.secondClientServiceRep"}
                  value={values.physicalAddress.secondClientServiceRep}
                  onChange={handleChange}
                  errors={errors}
                  onBlur={handleBlur}
                  // isViewMode={isViewMode}
                  touched={touched}
                />
              </Grid>
            </Grid>
            <Grid item xs={4} marginTop={2}>
              <CustomCheckBox
                inputProps={{ "aria-label": "controlled" }}
                // checked={
                //   values?.roleAccess?.find(
                //     (item) => item?.contentMenuId === value?.id
                //   ) || false
                // }
                // isViewMode={isViewMode}
                name={"usePhysicalAdress"}
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
                label="Use Physical Address"
              />
            </Grid>

            <Grid item container xs={12} marginTop={2}>
              <Grid item xs={12}>
                <Label style={{ marginBottom: "15px" }}>Mailling Address</Label>
              </Grid>
              <Grid item container xs={12} columnGap={2}>
                <Grid item xs={6}>
                  <CustomTextField
                    label={"Address 1"}
                    name={"maillingAddress.address1"}
                    value={values.maillingAddress.address1}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={5.7}>
                  <CustomTextField
                    label={"Address 2"}
                    name={"maillingAddress.address2"}
                    value={values.physicalAddress.address2}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} marginTop={2} columnGap={2}>
                <Grid item xs={3}>
                  <CustomTextField
                    label={"City"}
                    name={"maillingAddress.city"}
                    value={values.maillingAddress.city}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextField
                    label={"State"}
                    name={"maillingAddress.state"}
                    value={values.maillingAddress.state}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextField
                    label={"Zip"}
                    name={"maillingAddress.zip"}
                    value={values.maillingAddress.zip}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={2.3}>
                  <CustomTextField
                    label={"Country"}
                    name={"maillingAddress.country"}
                    value={values.maillingAddress.country}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} marginTop={2} columnGap={2}>
                <Grid item xs={3}>
                  <CustomFileUpload
                    // accept={`${fileTypeCheck()?.[0].name.toLowerCase()}/*`}
                    label={"Upload File*"}
                    name={"chargeFile"}
                    type={"file"}
                    // disabled={isViewMode}
                    errors={errors}
                    touched={touched}
                    value={values.chargeFile}
                    onChange={(e) => {
                      setFieldValue("chargeFile", e.target.files[0]);
                      hanlePreviewClick();
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextField
                    label={"Client URL"}
                    name={"maillingAddress.clientUrl"}
                    value={values.maillingAddress.clientUrl}
                    onChange={handleChange}
                    errors={errors}
                    onBlur={handleBlur}
                    // isViewMode={isViewMode}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Label style={{ marginTop: "0" }}> Sex</Label>
                  <CustomRadio
                    // label={"Sex"}
                    name={"maillingAddress.outBoundReferrals"}
                    inputValues={[
                      { id: 1, name: "Yes", value: "Yes" },
                      { id: 2, name: "No", value: "No" },
                    ]}
                    style={{
                      flexDirection: "row",
                      marginTop: 0,
                      padding: "2px 5px",
                    }}
                    value={values.maillingAddress.outBoundReferrals}
                    // defaultValue={"1"}
                    onChange={(e) => {
                      setFieldValue(
                        "maillingAddress.outBoundReferrals",
                        e.target.value
                      );
                    }}
                    disabled={false}
                    errors={errors}
                    touched={touched}
                  />
                </Grid>
              </Grid>
              {chargeFileLoader && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <StyleProgressBar />
                </Box>
              )}
              <Grid item xs={12} marginTop={1}>
                <Label style={{ marginBottom: "0px" }}>Physical Address</Label>
              </Grid>
              <Grid item xs={12} marginTop={2}>
                {chargeFileTable.headCells.length > 0 &&
                  chargeFileTable.boddyCells.length > 0 && (
                    <CustomTable tableData={chargeFileTable} />
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormGroupHeader
              style={{ fontSize: "16px", color: "#3A3F4C!important" }}
            >
              Client Place of Services
            </FormGroupHeader>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default OnboardForm;
