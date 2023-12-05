import React from "react";
import "./javalabheader.scss";
import { Button } from "antd";
import { FaDownload } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

export default function JavaLabHeader() {
  return (
    <div className="java-lab-header-container">
      <Button
        // onClick={handleFileDownload}
        className="download-file-button"
        // disabled={isLoading}
      >
        <FaDownload className="download-file-button-icon" />
      </Button>
      <Button
        // onClick={handlePythonCodeProcessing}
        className="play-icon-btn"
        // disabled={isLoading}
      >
        {/* {isLoading ? (
          <BiLoader className="loading-state-btn-icon" />
        ) : (
          <BsFillPlayFill className="play-icon" />
        )} */}
      </Button>
    </div>
  );
}
