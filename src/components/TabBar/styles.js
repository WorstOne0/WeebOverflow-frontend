import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  height: 7rem;
  width: 100%;

  display: flex;
`;

export const TabItem = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${(props) => (props.index ? "var(--color-primary-lighter)" : "#999")};
  font-size: 1.6rem;

  transition: color 0.2s ease-in;

  .Icon {
    margin-bottom: 0.5rem;

    font-size: 2.2rem;
  }
`;

export const Track = styled.div`
  height: 0.3rem;
  width: 100%;

  transform: translateX(${(props) => `${props.transform}%`});
  transition: transform 0.25s ease-out;
`;

export const Scroll = styled.div`
  height: 100%;
  width: ${(props) => `${props.width}%`};
  border-radius: 0.8rem;
  background: var(--color-primary);
`;
