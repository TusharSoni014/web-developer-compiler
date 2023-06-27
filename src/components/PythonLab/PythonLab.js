import React from "react";
import "./pythonlab.scss";
import Split from "react-split";
import PythonCodeInput from "./pythonCodeInput/PythonCodeInput";
import { Button } from "antd";
import { BsFillPlayFill } from "react-icons/bs";
import PythonCodePreview from "./pythonCodePreview/PythonCodePreview";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompileCode,
  updateEventType,
  updateLoading,
} from "../../redux/slices/PythonCompilerSlice";
import { BiLoader } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";

export default function PythonLab() {
  const dispatch = useDispatch();
  const pythonCodeValue = useSelector(
    (state) => state.pythonCompilerSlice.pythonCode
  );
  const processedCode = encodeURIComponent(encodeURIComponent(pythonCodeValue));
  const isLoading = useSelector((state) => state.pythonCompilerSlice.isLoading);
  const pythonCodeOutput = useSelector(
    (state) => state.pythonCompilerSlice.pythonCodeOutput
  );

  function handlePythonCodeProcessing() {
    dispatch(updateLoading(true));
    const codeObject = {
      code: processedCode,
      parameters: [],
    };
    dispatch(fetchCompileCode(codeObject));
  }

  useEffect(() => {
    dispatch(
      updateEventType(
        pythonCodeOutput?.trace?.[pythonCodeOutput.trace.length - 1].event
      )
    );
  }, [pythonCodeOutput]);

  function handleFileDownload() {
    const fileContent = pythonCodeValue;
    const fileName = "code.py";
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="python-lab-main-container">
      <Split
        minSize={280}
        style={{ height: "calc(100vh - 50px)" }}
        className="split"
      >
        <div className="python-code-input-inner-container">
          <div className="python-code-input-header">
            <Button
              onClick={handleFileDownload}
              className="download-file-button"
              disabled={isLoading}
            >
              <FaDownload className="download-file-button-icon" />
            </Button>
            <Button
              onClick={handlePythonCodeProcessing}
              className="play-icon-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <BiLoader className="loading-state-btn-icon" />
              ) : (
                <BsFillPlayFill className="play-icon" />
              )}
            </Button>
          </div>
          <PythonCodeInput />
        </div>
        <PythonCodePreview />
      </Split>
    </div>
  );
}
