import React, { useState, useRef, useEffect, useCallback } from "react";

import {
  Container,
  SliderContent,
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
  const [translate, setTranslate] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState();

  const ref = useRef(null);

  useEffect(() => {
    setOffsetWidth(ref.current.offsetWidth);
    window.addEventListener("resize", () =>
      setOffsetWidth(ref.current.offsetWidth)
    );
  }, []);

  const prevPage = () => {
    if (index == 0) return;

    setIndex(index - 1);
    setTranslate((index - 1) * offsetWidth);
  };

  const nextPage = () => {
    if (index == images.length - 1) return;

    setIndex(index + 1);
    setTranslate((index + 1) * offsetWidth);
  };

  return (
    <Container height={height} width={width} ref={ref}>
      <SliderContent translate={translate} width={offsetWidth * images.length}>
        {images.map((image) => (
          <Image src={image} width={offsetWidth} />
        ))}
      </SliderContent>

      <Counter>
        {index + 1} / {images.length}
      </Counter>
      <ArrowLeft className="Arrow" onClick={prevPage}>
        <BsChevronCompactLeft />
      </ArrowLeft>
      <ArrowRight className="Arrow" onClick={nextPage}>
        <BsChevronCompactRight />
      </ArrowRight>
      <DotsContainer>
        {images.map((image, indexImg) => (
          <Dots active={index == indexImg ? true : false} />
        ))}
      </DotsContainer>
    </Container>
  );
}

export default Gallery;
