import { Box } from "@mui/system";
import styled from "styled-components";
import CustomTextFeild from "../components/shared/TextFeildComp";
import { Grid } from "@mui/material";
import { CustomPasswordField } from "../components/shared/CustomPasswordField";
import { CustomSelectField } from "../components/shared/CustomSelectField";
import { SubmitButton } from "../styles/CustomButton";
import { useFormik } from "formik";
import { loginFormValidationSchema } from "../validation/LoginForm";
import CustomTextField from "../components/shared/CustomTextField";
import { useDispatch, useSelector } from "react-redux";
import { errorMsg, successMsg } from "../utils/snackMsgTrigger";
import { isLoading, storeMyProfile } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { matrixPath } from "../routes/routePath";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  MsalProvider,
} from "@azure/msal-react";
import { loginRequest } from "../auth-config";
import { useEffect } from "react";

export const LoginHeader = styled("div")(() => ({
  color: "#757575 !important",
  fontFamily: "Poppins",
  borderBottom: "1px solid grey",
  width: "fit-content",
  fontWeight: 600,
  marginTop: 10,
  //   textTransform: "lowercase !important",
}));

export const LoginImg = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  backgroundImage: "url(/latest-login.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden",
  borderRadius: "16px 0px 0px 16px ",
  position: "absolute",
  top: "0",
}));

export const roleData = [
  { name: "Billing Analyst", id: "pat1" },
  { name: "Coding Analyst", id: "cod1" },
];

const LogIn = () => {
  const defaultLoginData = useSelector((state) => state.defaultLoginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { userName: "", password: "", role: "" },
    onSubmit: () => userLogin(),
    validationSchema: loginFormValidationSchema,
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

  // const userLogin = () => {
  //   let logInErr = false;
  //   defaultLoginData.forEach((item, index) => {
  //     if (item.role === values.role) {
  //       if (
  //         item.userName === values.userName &&
  //         item.password === values.password
  //       ) {
  //         logInErr = true;

  //         const profileDate = {
  //           name: values.userName,
  //           role: roleData.find((item) => item.id === values.role)?.name,
  //           roleId: values.role,
  //         };

  //         dispatch(isLoading(true));
  //         setTimeout(() => {
  //           dispatch(isLoading(false));
  //           dispatch(storeMyProfile(profileDate));
  //           dispatch(successMsg("sucessfully login"));
  //           navigate(matrixPath.VISIT);
  //           localStorage.setItem("loginValue", JSON.stringify(profileDate));
  //         }, 2000);
  //       }
  //     }
  //   });
  //   if (!logInErr) dispatch(errorMsg("Please check your credential"));
  // };

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const naviagate = useNavigate();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => {
        naviagate(matrixPath.LOGIN);
      });
  };
  useEffect(() => {
    if (activeAccount != null) {
      naviagate(matrixPath.VISIT);
    }
  }, []);
  return (
    <Box
    //   sx={{ margin: 0, background: "linear-gradient(45deg, #57BADF, #E539F7)" }}
    // padding={5}
    // sx={{ backgroundColor: "#4F6795" }}
    >
      <Grid
        // sx={{ height: "calc(100vh - 100px)" }}
        sx={{ height: "100vh" }}
        container
        style={{
          backgroundImage: ` url('/latest-login.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
          borderRadius: "16px",
          position: "absolute",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            // background:
            //   "linear-gradient(209deg, rgb(212 212 255) 50%, rgba(255,255,255,1) 50%)",
            // backgroundColor: "#F6EB9C",
            padding: "30px 50px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "300px",
            marginRight: "30px",
          }}
        >
          <Box
            sx={{
              fontFamily: "Poppins",
              fontSize: "28px",
              textAlign: "center",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "40px",
              color: "#0B7D8C",
            }}
          >
            Lateral Care
          </Box>
          {/* <Box
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              // textAlign: "center",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#1B1B35",
              marginBottom: "30px",
            }}
          >
            Login
          </Box> */}

          {/* <CustomTextField
            label={"UserName*"}
            name={"userName"}
            variant="outlined"
            value={values.userName}
            onChange={handleChange}
            errors={errors}
            onBlur={handleBlur}
            // isViewMode={isViewMode}
            touched={touched}
            style={{ marginBottom: "30px" }}
          />

          <CustomSelectField
            label={"Role*"}
            name={"role"}
            inputValues={roleData}
            value={values?.role}
            onChange={handleChange}
            // isViewMode={isViewMode}
            errors={errors}
            onBlur={handleBlur}
            touched={touched}
            style={{ marginBottom: "30px" }}
          />
          <CustomPasswordField
            name={"password"}
            label={"Password*"}
            showEyeIcon
            variant={"outlined"}
            autoComplete={"off"}
            value={values.password}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSubmit();
              }
            }}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          /> */}
          <SubmitButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              padding: "25px",
              marginTop: "30px",
              backgroundColor: "#0B7D8C !important",
              fontFamily: "Poppins !important",
              fontSize: "16px",
              letterSpacing: "1.5px",
              borderRadius: "10px",
              fontWeight: 600,
              backgroundColor: "#098695!important",
            }}
            onClick={handleRedirect}
          >
            Login
          </SubmitButton>
        </Grid>

        {/* <Grid item xs={4}>
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
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default LogIn;
