import React, { useState } from "react";

import * as S from "./styles";

import { NavBar, Card, SmallCard } from "../../components";

const Main = () => {
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

              <S.PostList>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </S.PostList>
            </S.PostContainer>
          </S.Article>

          <S.TEMP_SideBarRight />
        </S.Content>
      </S.Container>
    </NavBar>
  );
};

export default Main;
