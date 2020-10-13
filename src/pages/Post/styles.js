import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;

  position: relative;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  padding: 1.5rem 1.5rem 1.5rem 0;
  background: var(--color-background-dark);

  display: flex;

  @media (max-width: 1100px) {
    padding: 0;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  padding: 0 1.5rem;

  color: var(--color-white);
  font-size: 2.8rem;
  font-weight: bold;
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.5rem 1.5rem 3rem 1.5rem;

  @media (max-width: 700px) {
    padding: 0.5rem 0.5rem 3rem 0.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: ${(props) => (props.type ? "0 1.5rem" : "1.5rem")};
`;

export const SideBar = styled.div`
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 28rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;
