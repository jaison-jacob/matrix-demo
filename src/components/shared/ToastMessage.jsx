import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { snackBarAction } from "../../redux/action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ToastMessage = (props) => {
  const dispatch = useDispatch();
  const toastMessageState = useSelector((state) => state.snackMessage);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(toastMessageState.messageStatus);
  }, [toastMessageState]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(
      snackBarAction({
        severity: "",
        message: "",
        messageStatus: false,
      })
    );
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={toastMessageState.severity}
          sx={{ width: "100%" }}
          vertical="top"
          horizontal="right"
        >
          {toastMessageState.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
