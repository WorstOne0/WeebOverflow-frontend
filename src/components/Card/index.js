import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { BsStopwatchFill, BsStopwatch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";

const Card = ({ post }) => {
  const [like, setLike] = useState(false);
  const [readLater, setReadLater] = useState(false);

  const tempImg = require("../../assets/704387.png");
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");

  return (
    <S.Container>
      <Link
        to={`/post/${post.id}`}
        style={{ width: "auto", textDecoration: "none" }}
      >
        <S.ImageWrapper>
          <S.IconContainer
            top="1rem"
            right="1rem"
            onClick={() => setReadLater((read) => !read)}
          >
            {readLater ? <BsStopwatchFill /> : <BsStopwatch />}
          </S.IconContainer>

          <S.Image src={post.thumbnail ? post.thumbnail[0].url : tempImg} />
          <S.IconContainer
            bottom="1rem"
            left="1rem"
            onClick={() => setLike((like) => !like)}
          >
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </S.IconContainer>
        </S.ImageWrapper>
      </Link>

      <S.TopContainer>
        <S.TagContainer>
          {post.tags.length === 0 ? (
            <>
              <S.Tag>#There</S.Tag>
              <S.Tag>#Is</S.Tag>
              <S.Tag>#No</S.Tag>
              <S.Tag>#Tags</S.Tag>
            </>
          ) : (
            post.tags.map((tag) => <S.Tag>{`#${tag}`}</S.Tag>)
          )}
        </S.TagContainer>

        <S.ReactionsContainer>
          <S.Reactions>
            <AiOutlineHeart className="Icon" />
            {post.likes}
          </S.Reactions>
          <S.Reactions>
            <AiOutlineComment className="Icon" />
            {post.comments}
          </S.Reactions>
        </S.ReactionsContainer>
      </S.TopContainer>

      <S.Title>{post.title}</S.Title>

      <S.DetailsContainer>
        <S.AuthorContainer>
          <S.AuthorImgBorder>
            <S.AuthorImg
              url={post.user.profile ? post.user.profile[0].url : UserImgTemp}
            />
          </S.AuthorImgBorder>

          <S.AuthorName>{post.user.screenName}</S.AuthorName>
        </S.AuthorContainer>

        <S.Date>
          {/*January 4th, 2020*/}
          {post.createdAt}
        </S.Date>
      </S.DetailsContainer>

      <S.ReactionsContainer id="mobile">
        <S.Reactions>
          <AiOutlineHeart className="Icon" />
          {post.likes}
        </S.Reactions>
        <S.Reactions>
          <AiOutlineComment className="Icon" />
          {post.comments}
        </S.Reactions>
      </S.ReactionsContainer>
    </S.Container>
  );
};

export default Card;
