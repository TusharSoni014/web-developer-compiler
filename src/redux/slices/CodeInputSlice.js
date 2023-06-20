import { createSlice } from "@reduxjs/toolkit";

const CodeInputSlice = createSlice({
  name: "CodeInputSlice",
  initialState: {
    html: `Hello World !`,
    css: `body{ \n  border:2px solid red; \n}`,
    js: `console.log("JavaScript Enabled !")`,
    selectedCodePiece: "",
    isLoading: false,
    wholeCode: "",
    aiHelperResult: "",
  },
  reducers: {
    updateHtmlCode: (state, action) => {
      state.html = action.payload;
    },
    updateCssCode: (state, action) => {
      state.css = action.payload;
    },
    updateJsCode: (state, action) => {
      state.js = action.payload;
    },
    updateSelectedCode: (state, action) => {
      state.selectedCodePiece = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateWholeCode: (state, action) => {
      state.wholeCode = action.payload;
    },
    updateAiHelperResult: (state, action) => {
      state.aiHelperResult = action.payload;
    },
  },
});

export default CodeInputSlice.reducer;
export const {
  updateHtmlCode,
  updateCssCode,
  updateJsCode,
  updateSelectedCode,
  updateLoading,
  updateWholeCode,
  updateAiHelperResult
} = CodeInputSlice.actions;
