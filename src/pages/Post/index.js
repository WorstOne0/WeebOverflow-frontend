import React, { useState } from "react";

import { Container, Content, PostContainer, SideBar } from "./styles";

import { NavBar } from "../../components";

const Post = () => {
  return (
    <Container>
      <NavBar />

      <Content>
        <PostContainer></PostContainer>
        <SideBar></SideBar>
      </Content>
    </Container>
  );
};

export default Post;
