import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import CodeMirror from "@uiw/react-codemirror";
import {
  loadLanguage,
  // langNames,
  // langs,
} from "@uiw/codemirror-extensions-langs";
import { FaRobot } from "react-icons/fa";
import "./aihelperbtn.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { WiStars } from "react-icons/wi";
import {
  updateAiHelperResult,
  updateLoading,
  updateSelectedCode,
} from "../../redux/slices/WebDevCodeInputSlice";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { updateTokens } from "../../redux/slices/AiHelperSlice";

export default function AiHelperButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.WebDevCodeInputSlice.isLoading);

  const selectedCode = useSelector(
    (state) => state.WebDevCodeInputSlice.selectedCodePiece
  );

  const wholeCode = useSelector((state) => state.WebDevCodeInputSlice.wholeCode);

  const aiHelperResult = useSelector(
    (state) => state.WebDevCodeInputSlice.aiHelperResult
  );

  const tokens = useSelector((state) => state.AiHelperSlice.tokens);

  const GPT_API_URL =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";

  async function callGPT3API(code) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    };
    const prompt = `explain me this segment of code in detail, ${code}`;
    const data = {
      prompt: prompt,
      max_tokens: 400,
      temperature: 0.7,
      top_p: 1,
    };

    try {
      const response = await axios.post(GPT_API_URL, data, { headers });
      dispatch(updateAiHelperResult(response.data.choices[0].text));
      setIsModalOpen(true);
      dispatch(updateTokens(tokens - 1));
      dispatch(updateLoading(false));
    } catch (error) {
      console.error("Error calling GPT-3.5 API:", error);
      toast.error("Some Error Occured !");
      dispatch(updateLoading(false));
    }
  }

  useEffect(() => {
    function handleHighlight() {
      const selectedText = window.getSelection()?.toString();
      dispatch(updateSelectedCode(selectedText));
    }
    window.addEventListener("mouseup", handleHighlight);
    return () => {
      window.removeEventListener("mouseup", handleHighlight);
    };
  }, [dispatch]);

  function handleAiHelp() {
    if (selectedCode !== "") {
      if (tokens > 0) {
        dispatch(updateLoading(true));
        callGPT3API(selectedCode);
      } else {
        toast.error("You run out of free AI HELP Tokens.");
      }
    } else {
      if (tokens > 0) {
        dispatch(updateLoading(true));
        toast("Auto Selected whole code.");
        callGPT3API(wholeCode);
      } else {
        toast.error("You run out of free AI HELP Tokens.");
      }
    }
  }
  return (
    <>
      <button
        className={isLoading ? "glow-on-hover active" : "glow-on-hover"}
        onClick={handleAiHelp}
      >
        {isLoading ? (
          "LOADING"
        ) : (
          <div className="ai-helper-btn-text">
            <WiStars className="icon" /> AI HELP
          </div>
        )}
      </button>
      <Modal
        className="ai-helper-modal"
        title={
          <div className="modal-header">
            <FaRobot className="robot-icon" /> AI Helper (Powered by GPT 3.5
            Turbo)
          </div>
        }
        open={isModalOpen}
        footer={false}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedCode !== "" ? (
          <CodeMirror
            className="ai-code-helper-code-screen"
            value={selectedCode}
            extensions={[loadLanguage("html")]}
            readOnly={true}
            lineWrapping={false}
            theme={draculaInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
              },
            })}
          />
        ) : (
          <CodeMirror
            className="ai-code-helper-code-screen"
            value={wholeCode}
            extensions={[loadLanguage("html")]}
            readOnly={true}
            theme={draculaInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
              },
            })}
          />
        )}
        <p>{aiHelperResult}</p>
      </Modal>
    </>
  );
}
