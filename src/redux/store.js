// import { createStore } from "redux";
import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
  {
    reducer,
  }
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;
