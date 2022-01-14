import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const NavBarContainerTop = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  background: var(--color-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
`;

export const LogoImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: var(--color-dark);
`;

export const LogoText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const UserImg = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;

export const Login = styled.div`
  padding: 0.7rem 1.5rem;
  border-radius: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  font-size: 1.6rem;

  .Icon {
    margin-left: 0.5rem;

    font-size: 2.2rem;
  }

  :hover {
    background: var(--color-primary-dark);
  }
`;

export const NavBarContainer = styled.div`
  height: 5rem;
  width: 100%;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.div`
  height: 100%;
  width: auto;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background: var(--color-primary-dark);
  }

  .Icon {
    margin-right: 1rem;

    color: #fff;
    font-size: 2rem;
  }

  ${(props) =>
    !props.isOpenNavBar &&
    css`
      .Icon {
        margin: 0;
      }
    `}
`;
