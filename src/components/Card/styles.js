import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 0.5rem 0;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  cursor: pointer;

  @media (min-width: 1366px) {
    flex-direction: column;
  }
`;

export const Type = styled.div`
  padding: 0.8rem;
  border-radius: 0.5rem;
  background: var(--color-primary);

  position: absolute;
  top: 1rem;
  right: 1rem;

  color: #fff;
  font-size: 1.4rem;
`;

export const IconContainer = styled.div`
  opacity: 0;

  position: absolute;
  top: ${(props) => (props.top ? props.top : "auto")};
  right: ${(props) => (props.right ? props.right : "auto")};
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  z-index: 1;

  color: var(--color-primary);
  font-size: 2.6rem;

  transition: opacity 0.2s;

  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;

  :hover {
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  height: 35rem;
  width: 100%;
  border: none;
  border-radius: 0.8rem;
`;

export const TopContainer = styled.div`
  height: 3rem;
  width: 100%;
  margin: 1rem 0 1.5rem 0;
  padding: 0 1.5rem;

  display: flex;

  @media (max-width: 610px) {
    padding: 0 0.5rem;
  }
`;

export const TagContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  :last-child {
    margin: 0;
  }
`;

export const Tag = styled.div`
  padding: 0.5rem 0.8rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  background: var(--color-primary);

  color: var(--color-white);
  font-size: 1.2rem;
`;

export const ReactionsContainer = styled.div`
  height: 100%;
  width: 100%;

  display: ${(props) => (props.id === "mobile" ? "none" : "flex")};
  justify-content: flex-end;
  align-items: center;

  :last-child {
    margin: 0;
  }

  @media (max-width: 610px) {
    padding-top: 1rem;

    display: ${(props) => (props.id === "mobile" ? "flex" : "none")};
    justify-content: space-around;
  }
`;

export const Reactions = styled.div`
  margin-left: 2rem;

  display: flex;
  align-items: center;

  color: var(--color-white);
  font-size: 1.8rem;

  .Icon {
    margin-right: 1rem;

    font-size: 2.2rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  padding: 0 1.5rem;

  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: justify;

  cursor: pointer;

  @media (max-width: 610px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorContainer = styled.div`
  padding: 0 1.5rem;

  display: flex;
  align-items: center;

  cursor: pointer;

  @media (max-width: 610px) {
    padding: 0 0.5rem;
  }
`;

export const AuthorImgBorder = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const AuthorImg = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 400px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const AuthorName = styled.h1`
  color: #fff;
  font-size: 1.6rem;

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Date = styled.h1`
  padding: 0 1.5rem;

  color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: normal;
`;
