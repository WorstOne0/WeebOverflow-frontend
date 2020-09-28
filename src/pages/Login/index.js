import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import * as S from "./styles";

import { InputText } from "../../components";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!, $thirdParty: String!) {
    login(email: $email, password: $password, thirdParty: $thirdParty) {
      id
      email
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data }] = useMutation(LOGIN);

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ variables: { email, password, thirdParty: "None" } });
  };

  return (
    <S.Container>
      <S.LoginContainer onSubmit={handleSubmit}>
        Login
        <S.InputWrapper>
          <InputText
            value={email}
            setValue={setEmail}
            name="e-mail"
            backgroundName={"var(--color-primary)"}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText
            value={password}
            setValue={setPassword}
            name="password"
            backgroundName={"var(--color-primary)"}
          />
        </S.InputWrapper>
        <S.Button type="submit">Entrar</S.Button>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
