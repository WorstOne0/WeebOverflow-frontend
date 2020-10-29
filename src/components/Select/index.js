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
      <Container margin={margin} backgroundName={backgroundName}>
        <Input
          value={value}
          type={type}
          className="Input"
          autoComplete="off"
          required
          borderColor={borderColor}
          borderColorHover={borderColorHover}
          onFocus={() => setToggle((state) => !state)}
        />
        <Label className="Label">{name}</Label>
        <Icon>
          <IoMdArrowDropdown />
        </Icon>
      </Container>
      {console.log(value)}

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
    </>
  );
};

export default Select;
