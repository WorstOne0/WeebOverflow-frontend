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
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const PostHeader = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 3rem;
  font-weight: bold;
`;

export const TagContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 1.5rem;

  display: flex;
  align-items: center;

  :last-child {
    margin: 0;
  }
`;

export const Tag = styled.div`
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  background: var(--color-primary);

  color: var(--color-white);
  font-size: 1.2rem;
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
  padding: ${(props) => (props.type ? "0 1.5rem" : "2.5rem 1.5rem")};
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

export const UserContainer = styled.div`
  height: 25rem;
  width: calc(100% - 3rem);
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  background: var(--color-darker);
`;
