import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;

  position: relative;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  padding: 15px 15px 15px 0;
  background: ${Theme.colors.darkColor0p};

  display: flex;
`;

export const PostContainer = styled.div`
  margin-left: 15px;
  padding: 20px;
  border-radius: 5px;
  background: ${Theme.colors.darkColor1p};

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PostTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const SideBar = styled.div`
  margin-left: 15px;
  border-radius: 5px;
  background: ${Theme.colors.darkColor1p};

  display: flex;
  flex: 0 0 230px;
`;
