import React from "react";

import { Container, Content } from "./styles";

const Loading = ({ type = "default" }) => {
  const typeLoading = () => {
    switch (type) {
      case "default":
        return <LoadingAnime />;

      default:
        return;
    }
  };

  return <Container>{typeLoading()}</Container>;
};

const LoadingAnime = () => {
  return <Content></Content>;
};

export default Loading;
