import React, { useState } from "react";

import * as S from "./styles";

const YTVideo = ({ url }) => {
  return (
    <S.Wrapper>
      <S.VideoContainer>
        <S.VideoWrapper>
          <S.IFrame
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></S.IFrame>
          {/*"https://www.youtube.com/embed/N4KI5geGhjo"*/}
        </S.VideoWrapper>
      </S.VideoContainer>
    </S.Wrapper>
  );
};

export default YTVideo;
