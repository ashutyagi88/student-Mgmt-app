import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../misc/idSlice";

const store = configureStore({
  reducer: {
    id: idReducer,
  },
});

export default store;
