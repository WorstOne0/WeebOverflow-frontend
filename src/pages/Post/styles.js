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
  padding: 15px 15px 15px 0;
  background: var(--color-background-dark);

  display: flex;
`;

export const PostContainer = styled.div`
  height: 100vh;
  margin-left: 15px;
  border-radius: 5px;
  background: var(--color-dark);

  display: flex;
  flex: 1;
`;

export const SideBar = styled.div`
  margin-left: 15px;
  border-radius: 5px;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 230px;
`;
