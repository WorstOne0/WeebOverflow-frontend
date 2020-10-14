import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Back = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: 2.2rem;

  cursor: pointer;
`;

export const Content = styled.div`
  min-height: 100vh;
  width: 40rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const Title = styled.h1`
  margin: 4rem 0 3rem 0;

  color: var(--color-white);
  font-size: 2.8rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const Button = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 4rem;
  border: 1px solid var(--color-hover-darker);
  border-radius: 0.8rem;
  background: transparent;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background: var(--color-primary);
  }
`;

export const GoogleButton = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 6rem;
  border: 1px solid var(--color-white);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  cursor: pointer;

  .Icon {
    margin-right: 1rem;

    font-size: 1.8rem;
  }
`;

export const FaceButton = styled.button`
  height: 5rem;
  width: 100%;
  margin-top: 2rem;
  border: 1px solid #4267b2;
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;
  cursor: pointer;

  color: #4267b2;

  .Icon {
    margin-right: 1rem;

    font-size: 1.8rem;
  }
`;
