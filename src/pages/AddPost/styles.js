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
  padding: 1.5rem;
  background: var(--color-background-dark);

  display: flex;
  flex-direction: column;

  .Split {
    width: 100%;

    display: flex;
  }
`;

export const Hero = styled.div`
  height: 60vh;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);
`;

export const PostContainer = styled.form`
  padding: 2rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h1`
  padding: 0 1.5rem;

  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
`;

export const PostInputTitle = styled.input`
  height: 5.5rem;
  width: 100%;
  margin-top: 3rem;
  border: 1px solid var(--color-darker);
  border-radius: 0.8rem;
  background: var(--color-dark);
`;

export const PostBlock = styled.div`
  width: 100%;
  padding: 2rem 0;

  position: relative;
`;

export const PostDelete = styled.div`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  color: red;
  font-size: 2.4rem;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  height: ${(props) => (props.height == "auto" ? "auto" : "100%")};
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};

  position: relative;
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .Space {
    width: 100%;
  }
`;

export const CodeContainer = styled.div`
  height: 45rem;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 80%;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;

  overflow: hidden;

  position: relative;
`;

export const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;

  position: absolute;
  top: 0;
  left: 0;
`;

export const UrlVideoButton = styled.button`
  height: 5.5rem;
  width: 30%;
  margin-left: 1rem;
  border: 1px solid var(--color-darker);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary-light);
  font-size: 1.8rem;

  cursor: pointer;

  transition: all 0.3s;

  :hover {
    background: var(--color-primary-light);

    color: var(--color-dark);
  }
`;

export const SendButton = styled.button`
  height: 5rem;
  width: 80%;
  margin-top: 2rem;
  border: 1px solid var(--color-darker);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary-light);
  font-size: 1.8rem;

  cursor: pointer;

  transition: all 0.3s;

  :hover {
    background: var(--color-primary-light);

    color: var(--color-dark);
  }
`;

export const SideBar = styled.div`
  margin-left: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-dark);

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0 0 35rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const SideBarTitle = styled.div`
  padding: 1.5rem;

  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
`;

export const SideContainer = styled.div``;

export const SideContainerTitle = styled.div``;

export const SideContainerContent = styled.div``;

export const SideContainerToggle = styled.div`
  height: 6rem;
  width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;

  display: flex;
`;

export const SideContainerToggleTitle = styled.div`
  width: 80%;
  padding: 0 0.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SideContainerToggleContent = styled.div`
  width: 20%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--color-dark);

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const UploadIcon = styled.img`
  height: 44rem;
  width: 57rem;
`;

export const UploadMessages = styled.div`
  max-width: 70%;

  color: var(--color-white);
  font-size: 2.8rem;
`;

export const UploadButton = styled.button`
  height: 7rem;
  width: 30rem;
  margin-top: 2rem;
  border: 1px solid var(--color-primary-light);
  border-radius: 0.8rem;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary-light);
  font-size: 1.8rem;

  cursor: pointer;

  transition: all 0.3s;

  :hover {
    background: var(--color-primary-light);

    color: var(--color-dark);
  }
`;
