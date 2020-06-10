import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: auto;
  width: 300px;
  background: ${Theme.colors.darkColor1p};

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  position: relative;
`;

export const Type = styled.div`
  padding: 8px;
  border-radius: 5px;
  background: ${Theme.colors.primaryColor2p};

  position: absolute;
  top: 10px;
  right: 10px;

  color: #fff;
  font-size: 14px;
`;

export const Image = styled.img`
  height: 254px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: ${Theme.colors.primaryColor2p};
`;

export const Title = styled.h1`
  width: 100%;
  padding: 15px;

  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: justify;
`;

export const Date = styled.h1`
  padding: 0 15px;

  color: ${Theme.colors.primaryColor2p};
  font-size: 14px;
  font-weight: normal;
`;
