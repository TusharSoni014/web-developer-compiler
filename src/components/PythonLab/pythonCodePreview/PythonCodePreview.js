import React, { useEffect, useState } from "react";
import "./pythoncodepreview.scss";
import { useDispatch, useSelector } from "react-redux";

export default function PythonCodePreview() {
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const pythonCodeOutput = useSelector(
    (state) => state.pythonCompilerSlice.pythonCodeOutput
  );
  console.log(pythonCodeOutput);
  const stdout =
    pythonCodeOutput?.trace?.[pythonCodeOutput?.trace?.length - 1].stdout;

  const exceptionError =
    pythonCodeOutput?.trace?.[pythonCodeOutput?.trace?.length - 1];

  const eventType = useSelector((state) => state.pythonCompilerSlice.eventType);

  useEffect(() => {
    setErrorMsg(null);
    if (eventType?.includes("exception")) {
      setErrorMsg(exceptionError?.exception_msg);
    } else if (eventType == "raw_input") {
      const input = prompt();
      console.log("input", input);
    } else {
      setErrorMsg(null);
    }
  }, [exceptionError]);

  useEffect(() => {
    console.log(exceptionError?.event.includes("exception"));
  }, [exceptionError]);

  return (
    <div className="python-code-preview-container">
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
          </div>
          <p className="user">Python v3 Console</p>
        </div>
        <div className="terminal_body">
          <div
            style={
              stdout !== undefined || errorMsg
                ? { display: "block" }
                : { display: "flex" }
            }
            className="terminal_promt"
          >
            <span className="terminal_location">{">>>"}</span>
            <pre className="python-code-output">
              {stdout !== undefined ? stdout : ""}
            </pre>
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
            <span className="terminal_cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
