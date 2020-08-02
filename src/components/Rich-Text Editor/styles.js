import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const RichTextContainer = styled.div`
  width: 100%;
  padding: calc(20px - 1em) 20px 20px 20px;
  background: ${Theme.colors.darkColor2p};
`;

export const Toolbar = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 3px;
  padding: 0 15px;
  background: ${Theme.colors.darkColor2p};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Icon = styled.div`
  margin-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  cursor: pointer;
`;

export const Button = styled.button`
  width: auto;
  padding: 3px;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.isActive ? "white" : "gray")};
`;

export const StyledTitle = styled.p`
  margin-top: 1em;
  font-size: 28px;
`;

export const StyledSubTitle = styled.p`
  margin-top: 1em;
  font-size: 24px;
`;

export const StyledBulletedList = styled.ul`
  margin-top: 1em;
  padding-left: 20px;
`;

export const StyledQuote = styled.div`
  margin-top: 1em;
  padding: 20px;
  border-left: 5px solid ${Theme.colors.primaryColor};
  background: ${Theme.colors.darkColor3p};

  font-weight: 100;
  text-align: justify;
`;
