import React from "react";

import * as S from "./styles";

import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaReply } from "react-icons/fa";

const Comments = () => {
  const UserImgTemp = require("../../assets/no_game_no_life-01-sora-older_brother-cloak-games-different.jpg");
  const comments = [
    {
      reaction: 23,
      user: { picture: UserImgTemp, username: "worstone0" },
      date: "há 10 horas",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      comment: [
        {
          reaction: 10,
          user: { picture: UserImgTemp, username: "jikkai10" },
          date: "há 5 horas",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
          comment: null,
        },
        {
          reaction: 77,
          user: { picture: UserImgTemp, username: "worstone0" },
          date: "há 1 hora",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
          comment: null,
        },
      ],
    },
    {
      reaction: 52,
      user: { picture: UserImgTemp, username: "dividebyzero" },
      date: "há 1 semana",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      comment: null,
    },
  ];

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Comments</S.Title>
        <S.SubTitle>16</S.SubTitle>
      </S.TitleContainer>

      <S.Content>
        {comments.map((comment) => (
          <>
            <S.Card>
              <S.CardReaction>
                <ImArrowUp className="IconUp" up={true} />
                <S.CardReactionNumber>{comment.reaction}</S.CardReactionNumber>
                <ImArrowDown className="IconDown" />
              </S.CardReaction>
              <S.CardContent>
                <S.CardHeader>
                  <S.CardUserContainer>
                    <S.CardUserImgBorder>
                      <S.CardUserImage url={comment.user.picture} />
                    </S.CardUserImgBorder>
                    <S.CardUserName>{comment.user.username}</S.CardUserName>
                    <S.CardDate>{comment.date}</S.CardDate>
                  </S.CardUserContainer>
                  <S.CardReply>
                    <FaReply className="Icon" />
                    Reply
                  </S.CardReply>
                </S.CardHeader>

                <S.CardText>{comment.text}</S.CardText>
              </S.CardContent>
            </S.Card>

            {comment.comment && (
              <S.CardPadding>
                <S.ContainerStripe>
                  <S.CardStripe />
                </S.ContainerStripe>

                <S.CardPaddingContent>
                  {comment.comment.map((comment) => (
                    <S.Card>
                      <S.CardReaction>
                        <ImArrowUp className="IconUp" up={true} />
                        <S.CardReactionNumber>
                          {comment.reaction}
                        </S.CardReactionNumber>
                        <ImArrowDown className="IconDown" />
                      </S.CardReaction>
                      <S.CardContent>
                        <S.CardHeader>
                          <S.CardUserContainer>
                            <S.CardUserImgBorder>
                              <S.CardUserImage url={comment.user.picture} />
                            </S.CardUserImgBorder>
                            <S.CardUserName>
                              {comment.user.username}
                            </S.CardUserName>
                            <S.CardDate>{comment.date}</S.CardDate>
                          </S.CardUserContainer>
                          <S.CardReply>
                            <FaReply className="Icon" />
                            Reply
                          </S.CardReply>
                        </S.CardHeader>

                        <S.CardText>{comment.text}</S.CardText>
                      </S.CardContent>
                    </S.Card>
                  ))}
                </S.CardPaddingContent>
              </S.CardPadding>
            )}
          </>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Comments;
