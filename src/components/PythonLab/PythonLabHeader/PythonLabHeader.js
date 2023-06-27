import React, { useState } from "react";
import "./pythonlabheader.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form,Input } from "antd";
import { FaDownload } from "react-icons/fa";
import {
  fetchCompileCode,
  updateLoading,
} from "../../../redux/slices/PythonCompilerSlice";
import { BiLoader } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { useEffect } from "react";
import TextArea from "antd/es/input/TextArea";


export default function PythonLabHeader() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pythonCodeValue = useSelector(
    (state) => state.pythonCompilerSlice.pythonCode
  );

  const pythonCodeOutput = useSelector(
    (state) => state.pythonCompilerSlice.pythonCodeOutput
  );
  const eventType = useSelector((state) => state.pythonCompilerSlice.eventType);
  console.log(eventType);

  function handleCancel() {
    setIsModalOpen(false);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    const codeObject = {
      code: processedCode,
      parameters: [values],
    };
    dispatch(fetchCompileCode(codeObject));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // setErrorMsg(null);
    if (eventType?.includes("exception")) {
      console.log("exception error");
    } else if (eventType === "raw_input") {
      setIsModalOpen(true);
    } else {
      // setErrorMsg(null);
    }
  }, [pythonCodeOutput, eventType]);

  function handlePythonCodeProcessing() {
    dispatch(updateLoading(true));
    const codeObject = {
      code: processedCode,
      parameters: [],
    };
    dispatch(fetchCompileCode(codeObject));
  }

  const processedCode = encodeURIComponent(encodeURIComponent(pythonCodeValue));

  const isLoading = useSelector((state) => state.pythonCompilerSlice.isLoading);

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
    <>
      <div className="python-code-input-header">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="stdin-button"
          disabled={isLoading}
        >
          <MdEditNote className="stdin-button-icon" />
        </Button>
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
      <Modal
        className="ai-helper-modal"
        title={<div className="modal-header">STDIN</div>}
        open={isModalOpen}
        footer={false}
        centered
        onCancel={handleCancel}
      >
        <Form
        layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="User Input"
            name="user-input"
            rules={[
              {
                required: true,
                message: "Please input a",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
