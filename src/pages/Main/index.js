import React, { useState } from "react";

import {
  Container,
  NavBarContainer,
  Content,
  Article,
  SpotlightContainer,
  SpotlightHeader,
  SpotlightTitle,
  TEMP_Buttons,
  SpotlightList,
  PostContainer,
  PostTitle,
  PostList,
  TEMP_SideBarRight,
} from "./styles";

import { NavBar, Card, SmallCard } from "../../components";

const Main = () => {
  return (
    <NavBar>
      <Container>
        <Content>
          <Article>
            <SpotlightContainer>
              <SpotlightHeader>
                <SpotlightTitle>Destaques</SpotlightTitle>

                <div className="Buttons">
                  <TEMP_Buttons />
                  <TEMP_Buttons />
                </div>
              </SpotlightHeader>

              <SpotlightList>
                <SmallCard />
                <SmallCard />
                <SmallCard />
              </SpotlightList>
            </SpotlightContainer>
            <PostContainer>
              <PostTitle>Posts</PostTitle>

              <PostList>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </PostList>
            </PostContainer>
          </Article>

          <TEMP_SideBarRight />
        </Content>
      </Container>
    </NavBar>
  );
};

export default Main;
