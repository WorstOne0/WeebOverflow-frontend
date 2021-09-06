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
  height: calc(68vh + 30rem - 10rem);
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;

  @media screen and (max-width: 1100px) {
    height: calc(55vh + 26rem - 8rem);
    margin-bottom: 1.5rem;

    @media screen and (max-height: 630px) {
      height: calc(55vh + 41.5vh - 8rem);
    }
  }
`;

export const HeaderImg = styled.img`
  height: 68vh;
  width: 100%;
  background: purple;

  @media screen and (max-width: 1100px) {
    height: 55vh;
  }
`;

export const HalfCircle = styled.div`
  height: 45%;
  max-height: 30rem;
  width: calc(100% - 3rem);
  border-radius: 0.8rem;
  background: -webkit-radial-gradient(
    50% 0,
    33rem,
    transparent 30%,
    var(--color-dark) 30%
  );
  background: radial-gradient(
    33rem at 50% 0,
    transparent 30%,
    var(--color-dark) 30%
  );

  position: absolute;
  bottom: 1.2rem;
  left: 50%;

  transform: translate(-50%);

  z-index: 1;

  @media screen and (max-width: 1100px) {
    height: 41.5vh;
    max-height: 26rem;
    width: 100%;
    background: -webkit-radial-gradient(
      50% 0,
      25rem,
      transparent 30%,
      var(--color-dark) 30%
    );
    background: radial-gradient(
      25rem at 50% 0,
      transparent 30%,
      var(--color-dark) 30%
    );

    bottom: 0;
  }
`;

export const Logout = styled.button`
  padding: 1rem;
  border: 1px solid var(--color-dark);
  border-radius: 0.8rem;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -5rem;
  right: 0;
  //transform: translate(-50%, -50%);

  color: var(--color-white);
  font-size: 1.8rem;
`;

export const UserContainer = styled.div`
  height: 45%;
  max-height: 30rem;
  width: calc(100% - 3rem);
  border-radius: 0.8rem;
  background: transparent;

  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  z-index: 2;

  transform: translate(-50%);

  @media screen and (max-width: 1100px) {
    height: 41.5vh;
    max-height: 26rem;
    width: 100%;

    bottom: 0;
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

  @media screen and (max-width: 1100px) {
    height: 14rem;
    width: 14rem;
  }
`;

export const ContentTop = styled.div`
  height: 11rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    height: 9rem;
  }
`;

export const ContentTopLeft = styled.div`
  height: 100%;
  width: calc(50% - 9rem);
  padding: 0 2.5rem;

  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    display: none;
  }
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

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0;

    justify-content: space-between;
  }
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

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 1.5rem;

    justify-content: space-between;
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

  @media screen and (max-width: 1100px) {
    font-size: 2.6rem;
  }
`;

export const UserName = styled.p`
  font-size: 1.6rem;

  @media screen and (max-width: 1100px) {
    font-size: 1.4rem;
  }
`;

export const ContentBottom = styled.div`
  height: auto;
  width: 100%;
  padding: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

export const ContentBottomLeft = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: 1100px) {
    display: none;
  }
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

  @media screen and (max-width: 1100px) {
    display: none;
  }
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

  @media screen and (max-width: 1100px) {
    padding: 0;
  }
`;

export const Main = styled.main`
  margin-right: 1.5rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0%;
  }
`;

export const Info = styled.div`
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostList = styled.div`
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;

  /*display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(55rem, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 1.5rem;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 610px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    grid-row-gap: 0;
  }
`;

export const CarpWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const SideBar = styled.div`
  height: 100vh;
  border-radius: 0.8rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 25vw;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
