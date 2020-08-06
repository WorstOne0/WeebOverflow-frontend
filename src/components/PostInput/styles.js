import styled from "styled-components";

export const Container = styled.div`
  height: 230px;
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  background: var(--color-darker);

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Type = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-hover-darker);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: var(--color-hover-darker);

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

    transition: all 0.3s;
    transform: translateY(-10px);
  }

  .Icon {
    margin-bottom: 5px;

    font-size: 34px;

    transition: all 0.3s;
    transform: translateY(15px);
  }
`;
