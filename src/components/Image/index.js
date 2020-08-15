import React from "react";

import { Container, Img, Subtitles } from "./styles";

function Image({ src, subtitles, cover = false }) {
  return (
    <Container>
      <Img src={src} cover={cover} />
      <Subtitles>{subtitles}</Subtitles>
    </Container>
  );
}

export default Image;
