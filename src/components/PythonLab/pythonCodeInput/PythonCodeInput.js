import CodeMirror from "@uiw/react-codemirror";
import "./pythoncodeinput.scss";
import React from "react";
import {
  loadLanguage,
  // langNames,
  // langs,
} from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { useDispatch, useSelector } from "react-redux";
import { updatePythonCode } from "../../../redux/slices/PythonCompilerSlice";

export default function PythonCodeInput() {
  const dispatch = useDispatch();

  const pythonCodeValue = useSelector(
    (state) => state.pythonCompilerSlice.pythonCode
  );

  const onPythonCodeChange = React.useCallback(
    (value, viewUpdate) => {
      dispatch(updatePythonCode(value));
    },
    [dispatch]
  );

  return (
    <div className="python-input-code-container">
      <CodeMirror
        className="code-editor-screen python"
        value={pythonCodeValue}
        placeholder={"type your python code here."}
        extensions={[loadLanguage("python")]}
        onChange={onPythonCodeChange}
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
        })}
      />
    </div>
  );
}
