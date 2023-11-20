import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  userName: Yup.string().trim().required("userName is required"),
  role: Yup.string().trim().required("Role is required"),
  password: Yup.string().trim().required("Password is required"),
});
