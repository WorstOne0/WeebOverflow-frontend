import React from "react";

import { Container, Content, Img } from "./styles";

const Loading = ({ type = "" }) => {
  const typeLoading = () => {
    switch (type) {
      case "running":
        return <AnimeRunning />;

      default:
        return <LoadingAnime />;
    }
  };

  return <Container>{typeLoading()}</Container>;
};

const LoadingAnime = () => {
  return <Content></Content>;
};

const AnimeRunning = () => {
  const imgSrc = require("../../assets/OptimalSleepyBluebottlejellyfish-small.gif");

  return (
    <Content>
      <Img src={imgSrc} />
    </Content>
  );
};

export default Loading;
