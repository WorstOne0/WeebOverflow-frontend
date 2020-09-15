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
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const HeaderImg = styled.img`
  height: 60%;
  width: 100%;
  background: purple;
`;

export const UserContainer = styled.div`
  height: 50%;
  width: calc(100% - 3rem);
  border-radius: 0.8rem;
  background: var(--color-dark);

  position: absolute;
  top: 73%;
  left: 50%;

  transform: translate(-50%, -50%);
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
  font-size: 2rem;

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

export const MainSection = styled.section`
  width: 100%;
  padding: 0 1.5rem;
  background: var(--color-background-dark);

  display: flex;
`;

export const Main = styled.main`
  height: 100vh;
  margin-right: 1.5rem;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SideBar = styled.div`
  height: 100vh;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 36rem;
`;
