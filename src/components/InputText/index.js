import React from "react";

import { Container, Input, Label } from "./styles";

const InputText = ({ margin = "0", name }) => {
  return (
    <Container margin={margin}>
      <Input className="Input" autoComplete="off" required />
      <Label className="Label">{name}</Label>
    </Container>
  );
};

export default InputText;
