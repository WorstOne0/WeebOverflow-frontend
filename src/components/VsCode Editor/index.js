import React from "react";

import Editor from "@monaco-editor/react";

const VsCodeEditor = () => {
  return (
    <Editor
      language="javascript"
      width="100%"
      theme="dark"
      options={{ minimap: { enable: false } }}
    />
  );
};

export default VsCodeEditor;
