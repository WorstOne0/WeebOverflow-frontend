import styled from "styled-components";

export const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;
