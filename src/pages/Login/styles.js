import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 4rem 0;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.form`
  height: 100%;
  width: 40rem;
  padding: 2rem;
  border-radius: 0.8rem;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  height: 5rem;
  width: 100%;
  background: transparent;
`;
