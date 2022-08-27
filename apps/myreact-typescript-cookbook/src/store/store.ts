import { configureStore } from "@reduxjs/toolkit";
import transitionPageSlice from "slices/transitionPageSlice";

export const store = configureStore({
  reducer: {
    transitionPage: transitionPageSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
