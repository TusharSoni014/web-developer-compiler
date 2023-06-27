import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCompileCode = createAsyncThunk(
  "fetch/CompileCode",
  async (body, thunkApi) => {
    try {
      const { code, parameters } = body;
      const url = `https://cors-proxy4.p.rapidapi.com/?url=https://pythontutor.com/web_exec_py3.py?user_script=${code}&raw_input_json=&options_json={"cumulative_mode":false,"heap_primitives":false,"show_only_outputs":true,"origin":"opt-frontend.js","fe_disableHeapNesting":true,"fe_textualMemoryLabels":true}&n=726`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            process.env.REACT_APP_CORS_API_KEY,
          "X-RapidAPI-Host": "cors-proxy4.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const result = await response.text();
      return JSON.parse(result);
    } catch (err) {
      console.log(err);
    } finally {
      const { dispatch } = thunkApi;
      dispatch(updateLoading(false));
    }
  }
);

const pythonCompilerSlice = createSlice({
  name: "pythonCompilerSlice",
  initialState: {
    pythonCode: "print('hello world !')",
    isLoading: false,
    pythonCodeOutput: {},
    eventType: null,
  },
  reducers: {
    updatePythonCode: (state, action) => {
      state.pythonCode = action.payload;
    },
    updatePythonCodeOutput: (state, action) => {
      state.pythonCodeOutput = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateEventType: (state, action) => {
      state.eventType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompileCode.fulfilled, (state, action) => {
      state.pythonCodeOutput = action.payload;
    });
  },
});

export default pythonCompilerSlice.reducer;
export const {
  updatePythonCode,
  updatePythonCodeOutput,
  updateLoading,
  updateEventType,
} = pythonCompilerSlice.actions;
