import styled from "styled-components";

export const Container = styled.div`
  height: 15rem;
  width: 100%;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  height: 100%;
  width: 30%;
  border-radius: 0.8rem 0 0 0.8rem;
  background: var(--color-primary-darker);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 1.8rem;
`;

export const IconShelter = styled.div`
  margin-bottom: 1rem;
  padding: 2.5rem;
  border-radius: 50%;
  background: var(--color-darker);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.8rem;
`;

export const Text = styled.div`
  height: 100%;
  width: 70%;
  border-radius: 0 0.8rem 0.8rem 0;
  background: var(--color-primary-dark);
`;
