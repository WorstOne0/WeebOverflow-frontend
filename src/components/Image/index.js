import React from "react";

import { Container, Wrapper, Img, Subtitles } from "./styles";

function Image({ src, subtitles, cover = false, style }) {
  return (
    <Container>
      <Img src={src} cover={cover} style={style} />
      <Subtitles>{subtitles}</Subtitles>
    </Container>
  );
}

export default Image;
