import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import * as S from "./styles";

import { NavBar, Card, SmallCard } from "../../components";

const POSTS = gql`
  query {
    posts {
      id
      thumbnail
      title
      tags
      text {
        type
        value
      }
      likes
      comments
      user {
        screenName
      }
      createdAt
    }
  }
`;

const Main = () => {
  const { loading, error, data, refetch } = useQuery(POSTS);
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <NavBar>
      <S.Container>
        <S.Content>
          <S.Article>
            <S.SpotlightContainer>
              <S.SpotlightHeader>
                <S.SpotlightTitle>Destaques</S.SpotlightTitle>

                <div className="Buttons">
                  <S.TEMP_Buttons />
                  <S.TEMP_Buttons />
                </div>
              </S.SpotlightHeader>

              <S.SpotlightList>
                <SmallCard />
                <SmallCard />
                <SmallCard />
              </S.SpotlightList>
            </S.SpotlightContainer>
            <S.PostContainer>
              <S.PostTitle>Posts</S.PostTitle>

              {loading ? (
                <h1>loading</h1>
              ) : (
                <S.PostList>
                  {data.posts.map((post) => (
                    <S.CarpWrapper>
                      <Card post={post} />
                    </S.CarpWrapper>
                  ))}
                </S.PostList>
              )}
            </S.PostContainer>
          </S.Article>

          <S.TEMP_SideBarRight />
        </S.Content>
      </S.Container>
    </NavBar>
  );
};

export default Main;
