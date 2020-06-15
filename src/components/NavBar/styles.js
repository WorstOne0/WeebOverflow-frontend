import styled, { css } from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: 100vh;
  width: ${(props) => (props.isOpenNavBar ? "300px" : "70px")};
  background: ${Theme.colors.primaryColor2p};

  display: flex;
  justify-content: space-between;
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
    css`
      height: 90px;
      padding: 10px 20px;
      flex-direction: column;
    `}
`;

export const IconShelter = styled.div`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 22px;

  cursor: pointer;
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

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      display: none;
    `};
`;

export const Login = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const User = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserImg = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      height: 50px;
      width: 50px;
    `}
`;

export const UserHeader = styled.div`
  padding: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      display: none;
    `}
`;

export const UserNameDisplay = styled.p`
  color: #fff;
  font-size: 20px;

  cursor: pointer;
`;

export const UserName = styled.p`
  color: #d4d4d4;
  font-size: 14px;

  cursor: default;
`;

export const UserStats = styled.div`
  height: 30px;
  width: 100%;
  padding: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: default;

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      height: auto;
      flex-direction: column;
    `}
`;

export const UserStatsBox = styled.div`
  padding: 7px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #d4d4d4;
  font-size: 14px;

  .Icon {
    margin-right: 5px;
  }
`;

export const BadgesContainer = styled.div`
  padding: 10px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  cursor: default;

  .Icon {
    margin-right: 5px;
  }

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      display: none;
    `}
`;

export const OptionsContainer = styled.div`
  height: 300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Options = styled.div`
  width: 100%;
  padding: 15px 0;
  margin-top: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background: ${Theme.colors.primaryColor3p};
  }

  .Icon {
    margin-right: 10px;

    color: #fff;
    font-size: 22px;
  }

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      .Icon {
        margin: 0;
      }
    `}
`;

export const OptionsText = styled.p`
  color: #fff;
  font-size: 18px;

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      display: none;
    `}
`;

export const BottomBar = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #fff;
  font-size: 18px;

  .Icon {
    cursor: pointer;
  }
`;
