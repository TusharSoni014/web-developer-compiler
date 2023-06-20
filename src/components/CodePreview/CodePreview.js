import React, { useEffect } from "react";
import "./codepreview.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateWholeCode } from "../../redux/slices/CodeInputSlice";

export default function CodePreview() {
  const htmlCode = useSelector((state) => state.CodeInputSlice.html);
  const cssCode = useSelector((state) => state.CodeInputSlice.css);
  const jsCode = useSelector((state) => state.CodeInputSlice.js);
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
    <iframe
      className="code-preview-container"
      src={iframeCode}
      title="Code Preview"
    />
  );
}
