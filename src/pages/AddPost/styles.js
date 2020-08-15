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
`;

export const PostContainer = styled.div`
  margin-left: 1.5rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImgLabel = styled.div`
  height: 25rem;
  width: 100%;
  border-radius: 0.8rem;
  border: 0.2rem dashed var(--color-darker);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 1rem;

    font-size: 18px;
  }
`;

export const BrowseButton = styled.label`
  height: 5rem;
  width: 17rem;
  margin-top: 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-primary);
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 18px;

  cursor: pointer;
`;

export const PostTitle = styled.h1`
  padding: 0 1.5rem;

  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
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
  top: 2rem;
  right: 0;

  color: red;
  font-size: 2.4rem;

  transform: translate(50%, -50%);
  cursor: pointer;
`;

export const CodeContaiener = styled.div`
  height: 30rem;
  width: 100%;
`;

export const SideBar = styled.div`
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 23rem;
`;
