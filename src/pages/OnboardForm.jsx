import { Grid, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormGroupHeader, Label } from "./CodingForm";
import CustomTextField from "../components/shared/TextFeildComp";
import { useFormik } from "formik";
import CustomTextarea from "../components/shared/CustomTextArea";
import { clientheaderValues } from "../constant/OnboardForm";
import CustomTable from "../components/shared/CustomTable";
import { useDispatch } from "react-redux";
import { isLoading } from "../redux/action";
import CustomLoader from "../components/shared/CustomLoader";
import { StyleProgressBar } from "../styles/CustomProgressBar";

const OnBoardForm = () => {
  const [tableData, setTableData] = useState({
    headCells: [],
    boddyCells: [],
  });
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
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
        outBoundReferrals: "",
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
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default OnBoardForm;
