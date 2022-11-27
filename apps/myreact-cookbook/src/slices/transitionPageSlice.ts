import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface TransitionPageState {
  transitionPageId: string;
};

const initialState: TransitionPageState = {
  transitionPageId: ''
};

const transitionPageSlice = createSlice({
  name: 'transitionPage',
  initialState,
  reducers: {
    transitionStart: (state, action: PayloadAction<string>) => {
      state.transitionPageId = action.payload;
    }
  }
});

export const { transitionStart } = transitionPageSlice.actions;
export const transitionPageId = (state: RootState) => state.transitionPage.transitionPageId

export default transitionPageSlice.reducer;
