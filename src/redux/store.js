import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../utils/createSlice";

export const store = configureStore({
  reducer: {
    mode: darkModeSlice.reducer,
  },
});
