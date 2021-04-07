import React from "react";

import { Container, Wrapper, Img, Subtitles } from "./styles";

function Image({
  src,
  subtitles,
  height = "50vh",
  width = "100%",
  cover = false,
  style,
}) {
  return (
    <Container>
      <Img src={src} height={height} cover={cover} style={style} />
      <Subtitles>{subtitles}</Subtitles>
    </Container>
  );
}

export default Image;
