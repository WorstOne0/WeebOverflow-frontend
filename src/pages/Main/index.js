import React, { Component } from "react";

import {
  Container,
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

import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import SmallCard from "../../components/Small Card";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />

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
      </>
    );
  }
}
