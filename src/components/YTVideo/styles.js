import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};

  position: relative;
`;

export const VideoContainer = styled.div`
  width: 80%;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;

  overflow: hidden;

  position: relative;
`;

export const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;

  position: absolute;
  top: 0;
  left: 0;
`;
