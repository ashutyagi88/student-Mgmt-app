import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
  name: "id",
  initialState: { value: 0 },
  reducers: {
    changeId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeId } = idSlice.actions;
export default idSlice.reducer;
