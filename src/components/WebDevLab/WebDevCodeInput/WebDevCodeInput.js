import React from "react";
import "./webdevcodeinput.scss";
import CodeMirror from "@uiw/react-codemirror";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  loadLanguage,
  // langNames,
  // langs,
} from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
import {
  updateCssCode,
  updateHtmlCode,
  updateJsCode,
} from "../../../redux/slices/WebDevCodeInputSlice";
import { Tabs } from "antd";
import AiHelperButton from "../../AiHelperBtn/AiHelperButton";
const { TabPane } = Tabs;

// console.log(langNames, langs);

export default function WebDevCodeInput() {
  const dispatch = useDispatch();

  const onHtmlCodeChange = React.useCallback(
    (value, viewUpdate) => {
      dispatch(updateHtmlCode(value));
    },
    [dispatch]
  );
  const onCssCodeChange = React.useCallback(
    (value, viewUpdate) => {
      dispatch(updateCssCode(value));
    },
    [dispatch]
  );
  const onJsCodeChange = React.useCallback(
    (value, viewUpdate) => {
      dispatch(updateJsCode(value));
    },
    [dispatch]
  );
  const htmlCodeValue = useSelector((state) => state.WebDevCodeInputSlice.html);
  const cssCodeValue = useSelector((state) => state.WebDevCodeInputSlice.css);
  const jsCodeValue = useSelector((state) => state.WebDevCodeInputSlice.js);

  return (
    <div className="code-input-container">
      <Tabs
        className="tabs-bar"
        defaultActiveKey="1"
        tabBarExtraContent={
          <>
            <AiHelperButton />
          </>
        }
      >
        <TabPane
          tab={
            <div className="tab-icon">
              <AiFillHtml5 className="icon" /> HTML
            </div>
          }
          key="html"
        >
          <CodeMirror
            className="code-editor-screen html"
            value={htmlCodeValue}
            placeholder={"Code written here will go inside <body> tag."}
            extensions={[loadLanguage("html")]}
            onChange={onHtmlCodeChange}
            theme={draculaInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
              },
            })}
          />
        </TabPane>
        <TabPane
          tab={
            <div className="tab-icon">
              <FaCss3Alt className="icon" /> CSS
            </div>
          }
          key="css"
        >
          <CodeMirror
            className="code-editor-screen css"
            value={cssCodeValue}
            extensions={[loadLanguage("css")]}
            placeholder={"Code written here will go inside <style> tag."}
            onChange={onCssCodeChange}
            theme={draculaInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
              },
            })}
          />
        </TabPane>
        <TabPane
          tab={
            <div className="tab-icon">
              <IoLogoJavascript className="icon" /> JavaScript
            </div>
          }
          key="js"
        >
          <CodeMirror
            className="code-editor-screen js"
            value={jsCodeValue}
            extensions={[javascript({ jsx: true })]}
            placeholder={"Code written here will go inside <script> tag."}
            onChange={onJsCodeChange}
            theme={draculaInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
              },
            })}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
