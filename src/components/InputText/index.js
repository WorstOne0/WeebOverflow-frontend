import React from "react";

import { Container, Input, Label } from "./styles";

const InputText = ({
  value = "",
  setValue,
  margin = "0",
  name,
  backgroundName = "var(--color-dark)",
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container margin={margin}>
      <Input
        value={value}
        className="Input"
        autoComplete="off"
        required
        onChange={handleChange}
      />
      <Label className="Label" backgroundName={backgroundName}>
        {name}
      </Label>
    </Container>
  );
};

export default InputText;
