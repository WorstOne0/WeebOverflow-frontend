import styled from "styled-components";
import { Theme } from "../../theme.js";

export const Container = styled.div`
  height: 100vh;
  width: 320px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  background: ${Theme.colors.primaryColor2p};
`;
