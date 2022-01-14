import styled from "styled-components";

export const Container = styled.div`
  width: 21.5rem;
  padding: 1rem;
  margin-left: 1.5rem;
  background: var(--color-darker);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Image = styled.div`
  height: 18rem;
  width: 100%;
  border-radius: 0.5rem;
  background: var(--color-primary);
`;

export const Title = styled.h1`
  width: 100%;
  padding: 0.5rem;

  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: justify;
`;

export const Date = styled.h1`
  padding: 0 0.5rem;

  color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: normal;
`;
