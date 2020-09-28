import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
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
`;

export const Scroll = styled.div`
  height: 100%;
  width: ${(props) => `${props.width}%`};
  border-radius: 0.8rem;
  background: var(--color-primary);

  transform: translateX(${(props) => `${props.transform}%`});
  transition: transform 0.25s ease-out;
`;

export const MainContainer = styled.section`
  width: 100%;

  overflow: hidden;
  position: relative;
`;

export const Main = styled.main`
  width: ${(props) => `${props.width}%`};

  display: flex;
  flex-direction: row;

  transform: translateX(${(props) => `calc(-${props.translate}%)`});

  transition: transform ease-out 0.2s;
`;

export const MainWrapper = styled.div`
  height: ${(props) => (props.visibility ? "auto" : 0)};
  width: ${(props) => `${props.width}%`};

  display: flex;
  flex-direction: column;
`;
