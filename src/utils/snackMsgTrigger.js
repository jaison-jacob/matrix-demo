import { snackBarAction } from "../redux/action";

export const successMsg = (msg) =>
  snackBarAction({
    severity: "success",
    message: msg,
    messageStatus: true,
  });

export const errorMsg = (msg) =>
  snackBarAction({
    severity: "error",
    message: msg ? msg : "Something went wrong",
    messageStatus: true,
  });
