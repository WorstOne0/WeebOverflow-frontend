import React, { useState, useEffect } from "react";

import * as S from "./styles";

import { BsStopwatchFill, BsStopwatch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = () => {
  const [like, setLike] = useState(false);
  const [readLater, setReadLater] = useState(false);

  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <S.Container>
      <S.ImageWrapper>
        <S.IconContainer
          top="1rem"
          right="1rem"
          onClick={() => setReadLater((read) => !read)}
        >
          {readLater ? <BsStopwatchFill /> : <BsStopwatch />}
        </S.IconContainer>
        <S.Image src={tempImg} />
        <S.IconContainer
          bottom="1rem"
          left="1rem"
          onClick={() => setLike((like) => !like)}
        >
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </S.IconContainer>
      </S.ImageWrapper>

      <S.Title>Title that is Big, what will happen if i keep, shit...</S.Title>

      <S.DetailsContainer>
        <S.AuthorContainer>
          <S.AuthorImg url={UserImgTemp} />
          <S.AuthorName>Worst One</S.AuthorName>
        </S.AuthorContainer>

        <S.Date>January 4th, 2020</S.Date>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default Card;
