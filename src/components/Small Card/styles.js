import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  width: 215px;
  padding: 10px;
  margin-left: 15px;
  background: ${Theme.colors.darkColor2p};

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Image = styled.div`
  height: 180px;
  width: 100%;
  border-radius: 5px;
  background: ${Theme.colors.primaryColor2p};
`;

export const Title = styled.h1`
  width: 100%;
  padding: 5px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: justify;
`;

export const Date = styled.h1`
  padding: 0 5px;

  color: ${Theme.colors.primaryColor2p};
  font-size: 14px;
  font-weight: normal;
`;
