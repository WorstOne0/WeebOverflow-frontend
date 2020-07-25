import React, { useState, useEffect } from "react";

import {
  Container,
  Content,
  PostContainer,
  PostTitle,
  SideBar,
} from "./styles";

import { NavBar, RichText } from "../../components";

const AddPost = () => {
  return (
    <Container>
      <NavBar />

      <Content>
        <PostContainer>
          <PostTitle>Criar um Post</PostTitle>

          <RichText />
        </PostContainer>
        <SideBar></SideBar>
      </Content>
    </Container>
  );
};

export default AddPost;
