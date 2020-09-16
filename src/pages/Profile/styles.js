import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--color-background-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: calc(60vh + 26rem);
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: 1000px) {
    height: calc(100vh - 5rem);
  }
`;

export const HeaderImg = styled.img`
  height: 60vh;
  width: 100%;
  background: purple;

  @media (max-width: 1000px) {
    height: 50vh;
  }
`;

export const UserContainer = styled.div`
  height: 45%;
  max-height: 30rem;
  width: calc(100% - 3rem);
  border-radius: 0.8rem;
  background: var(--color-dark);

  position: absolute;
  bottom: 1.5rem;
  left: 50%;

  transform: translate(-50%);

  @media (max-width: 1000px) {
    bottom: 6.5rem;
  }
`;

export const UserContent = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const UserSvgWrapper = styled.div`
  border-radius: 50%;
  background: var(--color-primary);

  position: absolute;
  top: 0rem;
  left: 50%;

  transform: translate(-50%, -50%);

  .Half-Circle {
    height: 18rem;
    width: 18rem;

    fill: none;
    stroke: var(--color-primary);
    stroke-width: 3;
    stroke-linecap: round;
  }
`;

export const UserImg = styled.div`
  height: 18rem;
  width: 18rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ContentTop = styled.div`
  height: 11rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const ContentTopLeft = styled.div`
  height: 100%;
  width: calc(50% - 9rem);
  padding: 0 2.5rem;

  display: flex;
  align-items: flex-start;
`;

export const SocialMediaContainer = styled.div`
  padding: 2.5rem 0;

  display: flex;
  align-items: center;

  color: var(--color-white);
  font-size: 2.4rem;

  .Facebook {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #4267b2;
    }
  }

  .Twitter {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #1da1f2;
    }
  }

  .Github {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #111;
    }
  }

  .Instagram {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #e1306c;
    }
  }

  .Linkedin {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #2867b2;
    }
  }

  .Youtube {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #ff0000;
    }
  }

  .Reddit {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #ff4500;
    }
  }

  .Twitch {
    margin-right: 1rem;

    cursor: pointer;

    transition: color 0.3s;

    :hover {
      color: #6441a5;
    }
  }
`;

export const ContentTopRight = styled.div`
  height: 100%;
  width: calc(50% - 9rem);
  padding: 0 2.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const OptionsContainer = styled.div`
  padding: 2.5rem 0;

  display: flex;
  align-items: center;

  color: var(--color-white);
  font-size: 2.4rem;

  .Icon {
    margin-left: 1rem;

    cursor: pointer;
  }
`;

export const UserTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--color-white);
`;

export const UserNick = styled.p`
  font-size: 3.2rem;
`;

export const UserName = styled.p`
  font-size: 1.6rem;
`;

export const ContentBottom = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentBottomLeft = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const StatusContainer = styled.div`
  width: 100%;
  max-width: 22rem;

  display: flex;
  justify-content: space-between;
`;

export const IconShelter = styled.div`
  display: flex;

  color: var(--color-white);
  font-size: 1.6rem;

  .Icon {
    margin-right: 1rem;

    color: var(--color-primary-lighter);
    font-size: 2.4rem;
  }
`;

export const ContentBottomRight = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const InfoBottom = styled.div`
  display: flex;

  color: var(--color-white);
  font-size: 1.6rem;

  .Icon {
    margin-right: 1rem;

    color: var(--color-primary-lighter);
    font-size: 2rem;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  padding: 0 1.5rem;
  background: var(--color-background-dark);

  display: flex;
`;

export const Main = styled.main`
  height: 100vh;
  margin-right: 1.5rem;
  border-radius: 0.8rem;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0%;
  }
`;

export const SideBar = styled.div`
  height: 100vh;
  border-radius: 0.8rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 36rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;
