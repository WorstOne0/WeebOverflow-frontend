import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;

  padding: 1.5rem 1.5rem 1.5rem 0;
  background: var(--color-background-dark);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  transition: all 0.3s ease-out;

  @media (max-width: 610px) {
    padding: 0;
  }
`;

export const Article = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-left: 1.5rem;

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
  }
`;

export const SpotlightContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  background: var(--color-dark);
  border-radius: 0.5rem;

  .Buttons {
    width: 7rem;

    display: flex;
    justify-content: space-between;
  }
`;

export const SpotlightHeader = styled.div`
  width: 100%;
  padding-right: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightTitle = styled.h1`
  padding: 0 2rem;

  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const TEMP_Buttons = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: var(--color-primary);
`;

export const SpotlightList = styled.div`
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PostContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem 0.5rem 0 0.5rem;
  margin-top: 1.5rem;
  background: var(--color-dark);
  border-radius: 0.5rem;

  @media (max-width: 610px) {
    padding: 1.5rem 0;
  }
`;

export const PostTitle = styled.h1`
  padding: 0 2rem;

  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
`;

export const PostList = styled.div`
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 0;

  /*display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(55rem, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 0rem;*/

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 610px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CarpWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const TEMP_SideBarRight = styled.div`
  height: 100vh;
  margin-left: 1.5rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 25vw;

  @media (max-width: 1100px) {
    display: none;
  }
`;
