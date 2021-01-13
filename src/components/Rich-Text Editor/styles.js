import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const RichTextContainer = styled.div`
  width: 100%;
  padding: ${(props) => (props.padding ? "1rem 2rem 2rem 2rem" : "0")};
  background: var(${(props) => props.background});

  font-size: 1.8rem;
`;

export const Toolbar = styled.div`
  height: 5rem;
  width: 100%;
  margin-bottom: 0.3rem;
  padding: 0 1.5rem;
  background: var(--color-darker);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Icon = styled.div`
  margin-right: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;

  cursor: pointer;
`;

export const Button = styled.button`
  width: auto;
  padding: 0.3rem;
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.isActive ? "white" : "gray")};
`;

export const StyledTitle = styled.p`
  margin-top: 2.5rem;
  font-size: 2.8rem;
`;

export const StyledSubTitle = styled.p`
  margin-top: 2.5rem;
  font-size: 2.4rem;
`;

export const StyledBulletedList = styled.ul`
  margin: 2rem 0 0 1rem;
  padding-left: 2rem;
`;

export const StyledQuote = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-left: 0.5rem solid var(--color-primary);
  background: var(--color-hover-darker);

  font-weight: 100;
  text-align: justify;
`;
