import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;

  position: relative;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  padding: 1.5rem 1.5rem 1.5rem 0;
  background: var(--color-background-dark);

  display: flex;

  @media (max-width: 1100px) {
    padding: 0;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const PostHeader = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;

  color: var(--color-white);
  font-size: 1.6rem;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 3rem;
  font-weight: bold;
`;

export const TagContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  position: relative;

  :last-child {
    margin: 0;
  }
`;

export const Tag = styled.div`
  padding: 0.7rem 1rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  background: var(--color-primary);

  color: var(--color-white);
  font-size: 1.2rem;
`;

export const ShareButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 50%;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-10%);

  transition: all 0.3s;

  color: var(--color-white);
  font-size: 2.2rem;

  cursor: pointer;

  :hover {
    background: var(--color-darker);
  }
`;

export const PostHeaderInfo = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-style: oblique;

  label {
    margin-right: 0.7rem;

    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.5rem 1.5rem 3rem 1.5rem;

  @media (max-width: 700px) {
    padding: 0.5rem 0.5rem 3rem 0.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: ${(props) => (props.type ? "0 1.5rem" : "2.5rem 1.5rem")};
`;

export const SideBar = styled.div`
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  flex: 0 0 28rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const UserContainer = styled.div`
  height: 25rem;
  width: calc(100% - 3rem);
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid black;
  background: var(--color-darker);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserHeader = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImgWrapper = styled.div`
  height: 100%;
  width: 28rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserImgBorder = styled.div`
  height: 13.5rem;
  width: 13.5rem;
  border: 0.3rem solid var(--color-primary);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const UserName = styled.div`
  margin-top: 1rem;

  color: var(--color-white);
  font-size: 2.2rem;
  font-weight: bold;
`;

export const UserInfo = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserInfoTitle = styled.p`
  height: 22%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 2.2rem;
  font-weight: bold;
`;

export const UserInfoText = styled.p`
  height: 78%;
  width: 100%;
  padding: 1.5rem 3rem 1.5rem 1.5rem;

  color: var(--color-white);
  font-size: 1.6rem;
  text-align: justify;
`;

export const UserFooter = styled.div`
  height: 5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
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

export const UserFooterFollow = styled.button`
  margin: 0 4rem;
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: 0.8rem;
  background: ${(props) =>
    props.follower
      ? "var(--color-hover-primary-darker)"
      : "var(--color-primary-lighter)"};

  display: flex;
  justify-content: center;
  align-items: center;

  .Icon {
    margin-right: 0.7rem;
  }
`;

export const UserFooterMedia = styled.div`
  height: 100%;
  width: auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

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
