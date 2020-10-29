import styled from "styled-components";

export const Container = styled.div`
  height: 5.5rem;
  width: 100%;
  margin: ${(props) => props.margin};

  position: relative;

  .Input:focus + .Label,
  .Input:valid + .Label {
    padding: 0 0.7rem;
    background: ${(props) => props.backgroundName};

    top: 0;

    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.8rem;
  background: transparent;

  font-size: 1.6rem;
  caret-color: transparent;

  :focus {
    border-color: ${(props) => props.borderColorHover};
  }
`;

export const Label = styled.label`
  background: transparent;

  position: absolute;
  top: 50%;
  left: 2rem;

  color: var(--color-white);
  font-size: 1.6rem;

  transform: translateY(-50%);

  pointer-events: none;
  transition: all 0.3s ease-out;
`;

export const Icon = styled.div`
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 1.5rem;

  transform: translate(-50%, -50%);

  color: var(--color-white);
  font-size: 1.8rem;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 0;
  border: 1px solid var(--color-hover-darker);
  border-radius: 0.8rem;
  background: var(--color-dark);

  position: absolute;

  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
`;

export const Options = styled.div`
  height: 4rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: var(--color-white);
  font-size: 1.8rem;

  transition: all 0.2s;
  cursor: pointer;

  :first-child {
    margin-top: 0;
  }

  :hover {
    background: var(--color-darker);
  }
`;
