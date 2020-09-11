import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 0.5rem 0;
  background: var(--color-dark);

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  position: relative;
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
  height: auto;
  width: 100%;

  position: relative;

  :hover {
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  height: 25.4rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-primary);
`;

export const Title = styled.h1`
  width: 100%;
  padding: 1.5rem;

  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: justify;

  cursor: pointer;
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
`;

export const AuthorImg = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-right: 1rem;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const AuthorName = styled.h1`
  color: #fff;
  font-size: 1.4rem;
`;

export const Date = styled.h1`
  padding: 0 1.5rem;

  color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: normal;
`;
