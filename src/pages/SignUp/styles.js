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
  padding: 6rem 0;

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
  margin-top: 4rem;

  position: relative;
`;

export const InputMessage = styled.div`
  width: 100%;
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: absolute;

  font-size: 1.4rem;
`;

export const InputBlock = styled.div`
  width: 20rem;
  padding: 2rem 0;
  border-radius: 0.8rem;
  background: var(--color-hover-darker);

  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: -2rem;
  right: -23rem;

  color: #fff;

  h1 {
    margin-bottom: 3rem;

    font-size: 1.6rem;
  }

  p {
    margin-bottom: 1rem;

    font-size: 1.4rem;
  }
`;

export const InputBlockArrow = styled.div`
  height: 0;
  width: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid var(--color-hover-darker);
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;

  position: absolute;
  top: 3rem;
  left: -2rem;
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
