import React from "react";
import "./pythonlab.scss";
import Split from "react-split";
import PythonCodeInput from "./pythonCodeInput/PythonCodeInput";
import PythonCodePreview from "./pythonCodePreview/PythonCodePreview";
import { useDispatch, useSelector } from "react-redux";
import { updateEventType } from "../../redux/slices/PythonCompilerSlice";
import { useEffect } from "react";
import PythonLabHeader from "./PythonLabHeader/PythonLabHeader";

export default function PythonLab() {
  const dispatch = useDispatch();
  const pythonCodeOutput = useSelector(
    (state) => state.pythonCompilerSlice.pythonCodeOutput
  );

  useEffect(() => {
    dispatch(
      updateEventType(
        pythonCodeOutput?.trace?.[pythonCodeOutput.trace.length - 1].event
      )
    );
  }, [pythonCodeOutput]);

  return (
    <div className="python-lab-main-container">
      <Split
        minSize={280}
        style={{ height: "calc(100vh - 50px)" }}
        className="split"
      >
        <div className="python-code-input-inner-container">
          <PythonLabHeader />
          <PythonCodeInput />
        </div>
        <PythonCodePreview />
      </Split>
    </div>
  );
}
