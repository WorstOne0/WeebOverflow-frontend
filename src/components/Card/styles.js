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
`;

export const AuthorImg = styled.div`
  height: 2rem;
  width: 2rem;
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
