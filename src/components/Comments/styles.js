import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 2rem 4.5rem;

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 3rem;
`;

export const SubTitle = styled.h2`
  color: var(--color-white);
  font-size: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 4.5rem;

  display: flex;
  flex-direction: column;
`;

export const CardPadding = styled.div`
  width: 100%;

  display: flex;
`;

export const ContainerStripe = styled.div`
  width: 15rem;
  padding-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardStripe = styled.div`
  height: 100%;
  width: 0.2rem;
  border-radius: 0.5rem;
  background: var(--color-darker);
`;

export const CardPaddingContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  min-height: 18rem;
  width: 100%;
  margin-top: 2rem;
  background: var(--color-darker);
  border-radius: 0.5rem;

  display: flex;
`;

export const CardReaction = styled.div`
  width: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .IconUp {
    font-size: 1.8rem;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      color: green;
    }
  }

  .IconDown {
    font-size: 1.8rem;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      color: red;
    }
  }
`;

export const CardReactionNumber = styled.p`
  padding: 2rem 0;

  color: var(--color-primary);
  font-size: 2.4rem;

  user-select: none;
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem 2.5rem 1.5rem 0;

  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  height: 5rem;
  width: 100%;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardUserContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardUserImgBorder = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  margin-right: 1.5rem;
  border: 0.1rem solid var(--color-primary);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardUserImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CardUserName = styled.p`
  margin-right: 1.5rem;

  color: var(--color-white);
  font-size: 1.8rem;
`;

export const CardDate = styled.p`
  color: #4d4d4d;
  font-size: 1.6rem;
`;

export const CardReply = styled.button`
  border: none;
  background: transparent;

  display: flex;
  justify-content: center;

  color: var(--color-primary-lighter);
  font-weight: bold;

  cursor: pointer;

  .Icon {
    margin-right: 0.5rem;

    font-size: 1.8rem;
  }
`;

export const CardText = styled.p`
  width: 100%;
  padding: 1.5rem;

  color: var(--color-white);
  font-size: 1.6rem;
  text-align: justify;
`;
