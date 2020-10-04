import React from "react";

import { Container, Input, Label } from "./styles";

const InputText = ({
  value = "",
  setValue,
  margin = "0",
  name,
  type = "text",
  backgroundName = "var(--color-dark)",
  borderColor = "var(--color-darker)",
  borderColorHover = "var(--color-primary)",
}) => {
  return (
    <Container margin={margin} backgroundName={backgroundName}>
      <Input
        value={value}
        type={type}
        className="Input"
        autoComplete="off"
        required
        onChange={setValue}
        borderColor={borderColor}
        borderColorHover={borderColorHover}
      />
      <Label className="Label">{name}</Label>
    </Container>
  );
};

export default InputText;
