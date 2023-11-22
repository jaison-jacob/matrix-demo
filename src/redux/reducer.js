export const initialState = {
  isLoading: false,
  snackMessage: {
    severity: "",
    message: "",
    messageStatus: false,
  },
  myProfile: {},
  defaultLoginData: [
    {
      userName: "Jaison",
      password: "12345",
      role: "pat1",
    },
    {
      userName: "Eesa",
      password: "1234",
      role: "cod1",
    },
    {
      userName: "Demo User1",
      password: "12345",
      role: "pat1",
    },
    {
      userName: "Demo User2",
      password: "12345",
      role: "cod1",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const copyState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case "LOADER": {
      return { ...copyState, isLoading: payload };
    }
    case "SNACKBARACTION": {
      return { ...copyState, snackMessage: payload };
    }
    case "PROFILE": {
      return {
        ...copyState,
        myProfile: payload,
      };
    }
    case "SIDEMENU": {
      return {
        ...copyState,
        roleSideMenu: payload,
      };
    }
    case "RIGHTMENU": {
      return {
        ...copyState,
        roleRightMenu: payload,
      };
    }
    default:
      return state;
  }
};
