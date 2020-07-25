import React, { useState, useMemo, useEffect } from "react";

import { Container } from "./styles";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const editor = withReact(createEditor());

const RichText = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default RichText;
