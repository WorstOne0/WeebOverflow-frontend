import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import * as S from "./styles";

import { NavBar, RichText, Image, Loading, Gallery } from "../../components";

const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      postedBy
      title
      user {
        id
        email
        userName
        screenName
      }
      thumbnail
      tags
      text {
        type
        value
      }
      likes
      comments
    }
  }
`;

const Post = (props) => {
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: props.match.params.id },
  });

  return (
    <NavBar>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <S.Container>
          <S.Content>
            <S.PostContainer>
              <Image src={data.getPost.thumbnail[0].url} cover={true} />

              <S.Main>
                <S.Title>{data.getPost.title}</S.Title>

                {data.getPost.text.map((block) => {
                  switch (block.type) {
                    case "Rich-Text":
                      return (
                        <S.Wrapper type={true}>
                          <RichText
                            readOnly={true}
                            toolbar={false}
                            padding={false}
                            value={block.value}
                            background="transparent"
                          />
                        </S.Wrapper>
                      );

                    case "Single Image":
                      return (
                        <S.Wrapper type={false}>
                          <Image src={block.value[0].url} />
                        </S.Wrapper>
                      );

                    case "Gallery":
                      return (
                        <S.Wrapper type={false}>
                          <Gallery
                            uploadedFiles={block.value}
                            readOnly={true}
                          />
                        </S.Wrapper>
                      );

                    default:
                      return;
                  }
                })}
              </S.Main>
            </S.PostContainer>
            <S.SideBar></S.SideBar>
          </S.Content>
        </S.Container>
      )}
    </NavBar>
  );
};

export default Post;
