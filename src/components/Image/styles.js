import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  height: 300px;
  max-height: 800px;
  width: ${(props) => (props.cover ? "100%" : "auto")};
  max-width: 100%;
`;

export const Subtitles = styled.div`
  width: 100%;
  padding: 5px 15px;

  color: #999;
  font-size: 16px;
  text-align: center;
`;
