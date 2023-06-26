import React, { useEffect } from "react";
import "./codepreview.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateWholeCode } from "../../../redux/slices/WebDevCodeInputSlice";

export default function WebDevCodePreview() {
  const htmlCode = useSelector((state) => state.WebDevCodeInputSlice.html);
  const cssCode = useSelector((state) => state.WebDevCodeInputSlice.css);
  const jsCode = useSelector((state) => state.WebDevCodeInputSlice.js);
  const dispatch = useDispatch();

  const combinedCode = `<html>
 <head>
  <style>\n${cssCode}\n</style>
 </head>
  <body>
    ${htmlCode}
  </body>
  <script>\n  ${jsCode}\n</script>
</html>`;

  useEffect(() => {
    dispatch(updateWholeCode(combinedCode));
  }, [combinedCode]);

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <>
      <div className="card">
        <div className="virtual-browser-header">
          <div className="circles">
            <div className="c"></div>
            <div className="c"></div>
            <div className="c"></div>
          </div>
          <div className="browser">
            <div className="chevrons">
              <svg
                viewBox="0 0 20 20"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                data-name="20"
                id="_20"
              >
                <path
                  transform="translate(6.25 3.75)"
                  d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                  id="Fill"
                ></path>
              </svg>
              <svg
                viewBox="0 0 20 20"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                data-name="20"
                id="_20"
              >
                <path
                  transform="translate(6.625 3.75)"
                  d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                  id="Fill"
                ></path>
              </svg>
            </div>
            <div className="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.89"
                height="7.887"
                viewBox="0 0 16.89 16.887"
              >
                <path
                  id="Fill"
                  d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z"
                  transform="translate(0.003 0)"
                ></path>
              </svg>
              Index.html
              <div></div>
            </div>
          </div>
        </div>
        <div className="virtual-browser-body">
          <iframe
            className="code-preview-container"
            src={iframeCode}
            title="Code Preview"
          />
        </div>
      </div>
    </>
  );
}
