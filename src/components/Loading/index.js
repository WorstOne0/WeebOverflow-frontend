import React from "react";

import { Container, Content, Img } from "./styles";
import { PongSpinner } from "react-spinners-kit";

const Loading = ({ height = "100%", width = "100%", size, type = "" }) => {
  const typeLoading = () => {
    switch (type) {
      case "running":
        return <AnimeRunning />;

      case "errorDefault":
        return <ErrorDefault />;

      default:
        return <Default size={size} />;
    }
  };

  return (
    <Container height={height} width={width}>
      {typeLoading()}
    </Container>
  );
};

const Default = ({ size }) => {
  return (
    <Content>
      <PongSpinner size={size} color="var(--color-primary)" />
    </Content>
  );
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

export const ErrorDefault = () => {
  return <Content></Content>;
};

export default Loading;
