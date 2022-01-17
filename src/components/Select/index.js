import React, { useState } from "react";

import {
  Container,
  Input,
  Label,
  Icon,
  OptionsContainer,
  Options,
} from "./styles";

import { IoMdArrowDropdown } from "react-icons/io";

const Select = ({
  value = "",
  options = [],
  setValue,
  width = "100%",
  margin = "0",
  name,
  type = "text",
  backgroundName = "var(--color-dark)",
  borderColor = "var(--color-darker)",
  borderColorHover = "var(--color-primary)",
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Container margin={margin} backgroundName={backgroundName} width={width}>
        <Input
          value={value}
          type={type}
          className="Input"
          autoComplete="off"
          required
          borderColor={borderColor}
          borderColorHover={borderColorHover}
          onClick={() => setToggle((state) => !state)}
        />
        <Label className="Label">{name}</Label>
        <Icon onClick={() => setToggle((state) => !state)}>
          <IoMdArrowDropdown />
        </Icon>

        <OptionsContainer display={toggle} className="Options">
          {options.map((option) => (
            <Options
              onClick={() => {
                console.log("O", option);
                setValue(option);
                setToggle(false);
              }}
            >
              {option}
            </Options>
          ))}
        </OptionsContainer>
      </Container>
    </>
  );
};

export default Select;
