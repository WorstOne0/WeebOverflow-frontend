import React, { useState } from "react";
import {
  Container,
  Wrapper,
  SliderContent,
  ImageContainer,
  Image,
  Counter,
  ArrowLeft,
  ArrowRight,
  DotsContainer,
  Dots,
} from "./styles";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Gallery({ height = "40rem", width = "100%", images = [] }) {
  const [index, setIndex] = useState(0);

  const prevPage = () => {
    if (index == 0) return;

    setIndex(index - 1);
  };

  const nextPage = () => {
    if (index == images.length - 1) return;

    setIndex(index + 1);
  };

  const goToPage = (number) => {
    setIndex(number);
  };

  return (
    <Container height={height} width={width}>
      <Wrapper>
        <SliderContent
          translate={index * (100 / images.length)}
          width={images.length}
        >
          {images.map((image) => (
            <ImageContainer>
              <Image src={image} />
            </ImageContainer>
          ))}
        </SliderContent>
      </Wrapper>

      <Counter>
        {index + 1} / {images.length}
      </Counter>
      <ArrowLeft className="Arrow" onClick={prevPage}>
        <BsChevronCompactLeft />
      </ArrowLeft>
      <ArrowRight className="Arrow" onClick={nextPage}>
        <BsChevronCompactRight />
      </ArrowRight>
      <DotsContainer className="Dots">
        {images.map((image, indexImg) => (
          <Dots
            active={index == indexImg ? true : false}
            onClick={() => goToPage(indexImg)}
          />
        ))}
      </DotsContainer>
    </Container>
  );
}

export default Gallery;
