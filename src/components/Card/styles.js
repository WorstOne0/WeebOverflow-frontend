import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 5px 0;
  background: var(--color-dark);

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  position: relative;
`;

export const Type = styled.div`
  padding: 8px;
  border-radius: 5px;
  background: var(--color-primary-darker);

  position: absolute;
  top: 10px;
  right: 10px;

  color: #fff;
  font-size: 14px;
`;

export const Image = styled.img`
  height: 254px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: var(--color-primary-darker);
`;

export const Title = styled.h1`
  width: 100%;
  padding: 15px;

  color: #fff;
  font-size: 18px;
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
  padding: 0 15px;

  display: flex;
  align-items: center;
`;

export const AuthorImg = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const AuthorName = styled.h1`
  color: #fff;
  font-size: 14px;
`;

export const Date = styled.h1`
  padding: 0 15px;

  color: var(--color-primary-darker);
  font-size: 14px;
  font-weight: normal;
`;
