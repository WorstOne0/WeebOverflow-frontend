import React from "react";

import { Container, Icon, IconShelter, Text } from "./styles";

import { FaSuitcase } from "react-icons/fa";

const LongCard = () => {
  return (
    <Container>
      <Icon>
        <IconShelter>
          <FaSuitcase />
        </IconShelter>
        Trabalha em
      </Icon>
      <Text></Text>
    </Container>
  );
};

export default LongCard;
