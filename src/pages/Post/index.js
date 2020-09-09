import React, { useState } from "react";

import { Container, Content, PostContainer, SideBar } from "./styles";

import { NavBar } from "../../components";

const Post = () => {
  return (
    <NavBar>
      <Container>
        <Content>
          <PostContainer></PostContainer>
          <SideBar></SideBar>
        </Content>
      </Container>
    </NavBar>
  );
};

export default Post;
