import React from "react";

import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Container } from "./styles";

const SyntaxHighlighter = ({
  string = `import React from "react";

import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Container } from "./styles";


// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully


const SyntaxHighlighter = ({ string = "Teste" }) => {
  return (
    <Container>
      <Prism language="javascript" style={dracula} styles={{ width: "100%" }}>
        {string}
      </Prism>
    </Container>
  );
};

export default SyntaxHighlighter;`,
}) => {
  return (
    <Container>
      <Prism
        language="jsx"
        style={dracula}
        className="Syntax"
        wrapLongLines={true}
      >
        {string}
      </Prism>
    </Container>
  );
};

export default SyntaxHighlighter;
