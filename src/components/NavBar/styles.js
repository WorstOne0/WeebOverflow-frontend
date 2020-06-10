import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: 100vh;
  width: ${(props) => (props.isOpenNavBar ? "320px" : "80px")};
  background: ${Theme.colors.primaryColor2p};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  transition: width 0.3s ease-out;
`;

export const LogoContainer = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    !props.isOpenNavBar &&
    "height: 80px; padding: 10px 20px; flex-direction: column"}
`;

export const IconShelter = styled.div`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 22px;
`;

export const LogoImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${Theme.colors.darkColor1p};
`;

export const LogoText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  ${(props) => !props.isOpenNavBar && "display: none"}
`;
