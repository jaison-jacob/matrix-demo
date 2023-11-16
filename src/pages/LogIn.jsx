import { Box } from "@mui/system";
import styled from "styled-components";
import CustomTextFeild from "../components/shared/TextFeildComp";
import { Grid } from "@mui/material";
import { CustomPasswordField } from "../components/shared/CustomPasswordField";

export const LoginHeader = styled("div")(() => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  borderBottom: "1px solid grey",
  width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

const LogIn = () => {
  return (
    <Box
      //   sx={{ margin: 0, background: "linear-gradient(45deg, #57BADF, #E539F7)" }}
      padding={20}
    >
      <Grid container xs={12}>
        <Grid item xs={4}>
          <CustomTextFeild type="text" label="UserName" variant="outlined" />
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <CustomPasswordField
            name={"password"}
            label={"Password*"}
            showEyeIcon
            variant={"outlined"}
            autoComplete={"off"}
            // value={values.password}
            // onChange={handleChange}
            // onKeyDown={(e) => {
            //   if (e.keyCode === 13) {
            //     handleSubmit();
            //   }
            // }}
            // onBlur={handleBlur}
            // errors={errors}
            // touched={touched}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
