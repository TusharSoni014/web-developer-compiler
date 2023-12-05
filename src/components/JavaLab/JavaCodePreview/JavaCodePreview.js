import React from "react";
import "./javacodepreview.scss";

export default function JavaCodePreview() {
  return (
    <div className="java-code-preview-container">
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
          </div>
          <p className="user">Java Console</p>
        </div>
        <div className="terminal_body">
          <div
            // style={
            //   stdout !== undefined || errorMsg
            //     ? { display: "block" }
            //     : { display: "flex" }
            // }
            className="terminal_promt"
          >
            <span className="terminal_location">{"Java ->"}</span>
            <pre className="python-code-output">
              {/* {stdout !== undefined ? stdout : ""} */}
            </pre>
            {/* {errorMsg && <div className="error-msg">{errorMsg}</div>} */}
            <span className="terminal_cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
