import styled from "styled-components";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    padding: "0 20px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "calc(100vh - 64px)",
    marginTop: "64px",
    overflowY: "auto",
    // marginTop: "60px",
    // marginLeft: `-${drawerWidth}px`,
    // height: "100vh",
    backgroundColor: "#FAF9F7",
    marginLeft: "0px",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      //   marginLeft: "-10px",
    }),
  })
);

export { Main };
