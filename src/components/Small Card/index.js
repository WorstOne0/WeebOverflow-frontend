import React, { useState } from "react";

import { Container, Image, Title, Date } from "./styles";

const SmallCard = () => {
  const tempImg = require("../../assets/704387.png");

  return (
    <Container>
      <Image />

      <Title>Title that is Big, what will happen if i keep, shit... </Title>
      <Date>January 4th, 2020</Date>
    </Container>
  );
};

export default SmallCard;
