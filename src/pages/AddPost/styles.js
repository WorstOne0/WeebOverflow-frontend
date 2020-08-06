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
  margin-left: 15px;
  padding: 20px;
  border-radius: 5px;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PostTitle = styled.h1`
  padding: 0 15px 15px 15px;

  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const SideBar = styled.div`
  margin-left: 15px;
  border-radius: 5px;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 230px;
`;
