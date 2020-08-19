import styled from "styled-components";

export const Container = styled.div`
  height: 25rem;
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-darker);
  background: var(--color-dark);

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Type = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-darker);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--color-primary-light);
  font-size: 1.4rem;
  font-weight: 500;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: var(--color-darker);

    p {
      opacity: 1;

      transform: translateY(0);
    }

    .Icon {
      transform: translateY(0);
    }
  }

  p {
    opacity: 0;

    font-weight: bold;

    transition: all 0.3s;
    transform: translateY(-1rem);
  }

  .Icon {
    margin-bottom: 0.5rem;

    font-size: 3.4rem;

    transition: all 0.3s;
    transform: translateY(1.5rem);
  }
`;
