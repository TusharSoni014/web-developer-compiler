import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPythonCompileCode = createAsyncThunk(
  "fetch/pythonCompileCode",
  async (body, thunkApi) => {
    try {
      const { code, parameters } = body;

      const parametersArray =
        parameters.length === 0 ? null : parameters[0]?.split("\n");

      console.log("parametersArray", parametersArray);

      const url = `https://cors-proxy4.p.rapidapi.com/?url=https://pythontutor.com/web_exec_py3.py?user_script=${code}&raw_input_json=%5B%2215%22%5D&options_json=%7B%22cumulative_mode%22%3Afalse%2C%22heap_primitives%22%3Afalse%2C%22show_only_outputs%22%3Afalse%2C%22origin%22%3A%22opt-frontend.js%22%2C%22fe_disableHeapNesting%22%3Atrue%2C%22fe_textualMemoryLabels%22%3Afalse%7D&n=716&user_uuid=777db458-c475-47c0-a764-a7416a043619&session_uuid=d6565388-b205-43c1-9df5-f0d90b1a8197`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_CORS_API_KEY,
          "X-RapidAPI-Host": "cors-proxy4.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(url);
      return result;
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
    builder.addCase(fetchPythonCompileCode.fulfilled, (state, action) => {
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
