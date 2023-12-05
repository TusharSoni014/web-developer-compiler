import React from "react";
import "./javalab.scss";
import Split from "react-split";
import PythonCodeInput from "../PythonLab/pythonCodeInput/PythonCodeInput";
import JavaLabHeader from "./JavaLabHeader/JavaLabHeader";
import JavaCodePreview from "./JavaCodePreview/JavaCodePreview";

export default function JavaLab() {
  return (
    <div className="java-lab-main-container">
      <Split
        minSize={280}
        style={{ height: "calc(100vh - 50px)" }}
        className="split"
      >
        <div className="java-code-input-inner-container">
          <JavaLabHeader/>
          <PythonCodeInput />
        </div>
        <JavaCodePreview/>
      </Split>
    </div>
  );
}
