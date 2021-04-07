import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
<<<<<<< HEAD
  height: ${(props) => props.height};
=======
  height: 100%;
>>>>>>> 185450598cb97c9516c13383f1a3e1f97a38e5e8
  max-height: 50rem;
  width: ${(props) => (props.cover ? "100%" : "auto")};
  max-width: 100%;
`;

export const Subtitles = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;

  color: #999;
  font-size: 1.6rem;
  text-align: center;
`;
