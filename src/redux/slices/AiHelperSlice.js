import { createSlice } from "@reduxjs/toolkit";

const AiHelperSlice = createSlice({
  name: "AiHelperSlice",
  initialState: {
    tokens: 10,
  },
  reducers: {
    updateTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
});

export default AiHelperSlice.reducer;
export const { updateTokens } = AiHelperSlice.actions;
