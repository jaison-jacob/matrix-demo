export const isLoading = (data) => {
  return { type: "LOADER", payload: data };
};

export const snackBarAction = (data) => {
  return { type: "SNACKBARACTION", payload: data };
};

export const storeMyProfile = (data) => {
  return { type: "PROFILE", payload: data };
};
