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
  padding: 1.5rem;
  background: var(--color-background-dark);

  display: flex;
  flex-direction: column;

  .Split {
    width: 100%;

    display: flex;
  }
`;

export const Hero = styled.div`
  height: 70vh;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);
`;

export const PostContainer = styled.form`
  padding: 2rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h1`
  padding: 0 1.5rem;

  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const PostInputTitle = styled.input`
  height: 5.5rem;
  width: 100%;
  margin-top: 3rem;
  border: 1px solid var(--color-darker);
  border-radius: 0.8rem;
  background: var(--color-dark);
`;

export const PostBlock = styled.div`
  width: 100%;
  padding: 2rem 0;

  position: relative;
`;

export const PostDelete = styled.div`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  color: red;
  font-size: 2.4rem;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const CodeContaiener = styled.div`
  height: 30rem;
  width: 100%;
`;

export const SendButton = styled.button`
  height: 5rem;
  width: 80%;
  margin-top: 2rem;
  border: 1px solid var(--color-darker);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary-light);
  font-size: 1.8rem;

  cursor: pointer;

  transition: all 0.3s;

  :hover {
    background: var(--color-primary-light);

    color: var(--color-dark);
  }
`;

export const SideBar = styled.div`
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 30rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;
