import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-matlab";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";

const VsCodeEditor = ({
  code,
  setCode,
  readOnly = false,
  language = "javascript",
  theme = "dark",
}) => {
  return (
    <AceEditor
      mode={language == "C/C++" ? "c_cpp" : language}
      theme={theme == "dark" ? "dracula" : "github"}
      value={code}
      onChange={(newCode) => setCode(newCode)}
      name="CodeEditor"
      editorProps={{ $blockScrolling: true }}
      showGutter={false}
      highlightActiveLine={false}
      showPrintMargin={false}
      fontSize={16}
      wrapEnabled={true}
      readOnly={readOnly}
      height="100%"
      width="100%"
      setOptions={readOnly ? { maxLines: Infinity } : {}}
    />
  );
};

export default VsCodeEditor;
