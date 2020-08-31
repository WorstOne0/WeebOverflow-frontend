import styled, { css } from "styled-components";

export const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  position: relative;

  overflow: hidden;

  :hover {
    .Arrow {
      opacity: 1;
    }

    .Dots {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
`;

export const SliderContent = styled.div`
  height: 100%;
  width: calc(${(props) => `100% * ${props.width}`});

  display: flex;
  flex-direction: row;

  position: relative;

  transform: translateX(${(props) => `calc(-${props.translate}%)`});

  transition: transform ease-out 0.2s;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: ${(props) => (props.cover ? "100%" : "auto")};
  max-width: 100%;
`;

export const Counter = styled.div`
  height: 2rem;
  width: 3rem;
  border-radius: 0.8rem;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;

  color: var(--color-text-base);
  font-size: 1rem;
`;

export const Arrow = styled.div`
  height: 9rem;
  width: 4rem;
  background: transparent;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;

  transition: opacity 0.2s;

  color: var(--color-primary);
  font-size: 4rem;

  cursor: pointer;

  :hover {
    background: rgba(17, 32, 52, 0.3);
  }
`;

export const ArrowLeft = styled(Arrow)`
  top: 50%;
  left: 0;

  transform: translateY(-50%);
`;

export const ArrowRight = styled(Arrow)`
  top: 50%;
  right: 0;

  transform: translateY(-50%);
`;

export const DotsContainer = styled.div`
  height: 5rem;
  width: 100%;
  max-width: 70rem;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;

  transition: opacity 0.2s;
  transform: translate(-50%);
`;

const background = css`
  background: var(--color-primary);
`;

export const Dots = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 1.5rem;
  border: 2px solid var(--color-primary);
  border-spacing: 100px;
  border-radius: 50%;

  ${(props) => props.active && background}

  transition: all 0.5s;
  z-index: 1;

  cursor: pointer;

  :hover {
    background: var(--color-primary);
  }
`;
