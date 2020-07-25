import React, { useState, useEffect } from "react";

import {
  Container,
  Type,
  Image,
  Title,
  DetailsContainer,
  AuthorContainer,
  AuthorImg,
  AuthorName,
  Date,
} from "./styles";

const Card = () => {
  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <Container>
      <Image src={tempImg} />
      <Title>Title that is Big, what will happen if i keep, shit...</Title>
      <DetailsContainer>
        <AuthorContainer>
          <AuthorImg url={UserImgTemp} />
          <AuthorName>Worst One</AuthorName>
        </AuthorContainer>

        <Date>January 4th, 2020</Date>
      </DetailsContainer>
    </Container>
  );
};

export default Card;
