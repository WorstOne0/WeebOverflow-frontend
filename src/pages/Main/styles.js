import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  margin-left: ${(props) => (props.isOpenNavBar ? "320px" : "80px")};

  padding: 15px 15px 15px 0;
  background: ${Theme.colors.darkColor0p};

  display: flex;
  justify-content: center;
  align-items: flex-start;

  transition: all 0.3s ease-out;
`;

export const Article = styled.div`
  width: 100%;
  margin-left: 15px;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SpotlightContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  background: ${Theme.colors.darkColor1p};

  .Buttons {
    width: 70px;

    display: flex;
    justify-content: space-between;
  }
`;

export const SpotlightHeader = styled.div`
  width: 100%;
  padding-right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightTitle = styled.h1`
  padding: 0 20px;

  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const TEMP_Buttons = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${Theme.colors.primaryColor2p};
`;

export const SpotlightList = styled.div`
  width: 100%;
  padding: 15px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PostContainer = styled.div`
  width: 100%;
  padding: 15px 5px;
  margin-top: 15px;
  background: ${Theme.colors.darkColor1p};
`;

export const PostTitle = styled.h1`
  padding: 0 20px;

  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const PostList = styled.div`
  width: 100%;
  padding: 20px 0;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  grid-row-gap: 10px;
`;

export const TEMP_SideBarRight = styled.div`
  height: 100vh;
  margin-left: 15px;
  background: ${Theme.colors.darkColor1p};

  display: flex;
  flex: 0 0 230px;
`;
