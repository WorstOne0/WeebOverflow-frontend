import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;

  position: relative;
`;

export const NavBarContainer = styled.div`
  height: 100vh;
  width: ${(props) => (props.isOpenNavBar ? "30rem" : "7rem")};
  padding: 2rem 0;
  background: var(--color-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 0;

  transition: width 0.3s ease-out;
`;

export const LogoImg = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: var(--color-dark);
`;

export const Login = styled.div`
  height: 8rem;
  width: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--color-white);
  font-size: 1.6rem;

  .Icon {
    margin-bottom: 0.5rem;

    font-size: 2.2rem;
  }
`;

export const UserImg = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      height: 5rem;
      width: 5rem;
    `}
`;

export const OptionsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Options = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  margin-top: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background: var(--color-primary-dark);
  }

  .Icon {
    color: #fff;
    font-size: 2.2rem;
  }
`;
