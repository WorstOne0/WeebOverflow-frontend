import React, { useState, useEffect } from "react";

import * as S from "./styles";

import { BsStopwatchFill, BsStopwatch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";

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

      <S.TopContainer>
        <S.TagContainer>
          <S.Tag>#react</S.Tag>
          <S.Tag>#javascript</S.Tag>
          <S.Tag>#anime</S.Tag>
          <S.Tag>#pudim</S.Tag>
        </S.TagContainer>

        <S.ReactionsContainer>
          <S.Reactions>
            <AiOutlineHeart className="Icon" />
            1.2k
          </S.Reactions>
          <S.Reactions>
            <AiOutlineComment className="Icon" />
            500
          </S.Reactions>
        </S.ReactionsContainer>
      </S.TopContainer>

      <S.Title>
        Typography basics and best practices for software developers and write
        more and more to try to break a line
      </S.Title>

      <S.DetailsContainer>
        <S.AuthorContainer>
          <S.AuthorImgBorder>
            <S.AuthorImg url={UserImgTemp} />
          </S.AuthorImgBorder>

          <S.AuthorName>Worst One</S.AuthorName>
        </S.AuthorContainer>

        <S.Date>January 4th, 2020</S.Date>
      </S.DetailsContainer>

      <S.ReactionsContainer id="mobile">
        <S.Reactions>
          <AiOutlineHeart className="Icon" />
          1.2k
        </S.Reactions>
        <S.Reactions>
          <AiOutlineComment className="Icon" />
          500
        </S.Reactions>
      </S.ReactionsContainer>
    </S.Container>
  );
};

export default Card;
