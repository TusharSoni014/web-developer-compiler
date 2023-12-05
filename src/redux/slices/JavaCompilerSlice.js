import { createSlice } from "@reduxjs/toolkit";

const javaCompilerSlice = createSlice({
  name: "javaCompilerSlice",
  initialState: {
    javaCode: `public class HelloWorld {\\n    public static void main(String[] args) {\\n        System.out.println(\\"Hello, world!\\");\\n    }\\n}`,
    isLoading: false,
    javaCodeOutput: {},
    eventType: null,
  },
  reducers: {
    updateJavaCode: (state, action) => {
      state.pythonCode = action.payload;
    },
    updateJavaCodeOutput: (state, action) => {
      state.pythonCodeOutput = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateEventType: (state, action) => {
      state.eventType = action.payload;
    },
  },
});

export default javaCompilerSlice.reducer;
export const {
  updateJavaCode,
  updateJavaCodeOutput,
  updateLoading,
  updateEventType,
} = javaCompilerSlice.actions;
