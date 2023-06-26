import React from "react";
import "./webdevlab.scss";
import Split from "react-split";
import WebDevCodeInput from "./WebDevCodeInput/WebDevCodeInput";
import WebDevCodePreview from "./WebDevCodePreview/WebDevCodePreview";

export default function WebDevLab() {
  return (
    <div className="web-dev-lab-container">
      <Split minSize={280} className="split">
        <WebDevCodeInput />
        <WebDevCodePreview />
      </Split>
    </div>
  );
}
