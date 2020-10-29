import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { InputText, Select } from "../../components";

const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $userName: String!
    $screenName: String!
    $thirdParty: String!
  ) {
    createUser(
      email: $email
      password: $password
      userName: $userName
      screenName: $screenName
      thirdParty: $thirdParty
    ) {
      id
      email
    }
  }
`;

const initialState = {
  value: "",
  onFocus: false,
  validate: { error: true, errorMsg: "" },
};

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(initialState);
  const [userName, setUsername] = useState(initialState);

  const validateEmail = () => {
    if (email.value.length === 0) return 0;

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) return 2;

    return 1;
  };

  const validatePassword = () => {
    if (password.value.length === 0) return 0;

    if (password.value.length < 8 || password.value.length > 20) return 2;

    if (!/.*[a-z].*/.test(password.value)) return 2;

    if (!/\d/.test(password.value)) return 2;

    return 1;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.value.length === 0) return 0;

    if (password.value !== confirmPassword.value) return 2;

    return 1;
  };

  const validateUserName = () => {
    if (userName.value.length === 0) return 0;

    if (userName.value.length < 5 || userName.value.length > 20) return 2;

    if (!/^[a-z0-9_-]*$/.test(userName.value)) return 2;

    return 1;
  };

  const handleSubmit = () => {};

  return (
    <S.Container>
      <S.Back onClick={() => history.goBack()}>
        <BsArrowLeft />
      </S.Back>

      <S.Content>
        <S.GoogleButton>
          <AiOutlineGoogle className="Icon" /> Crie sua conta com o Google
        </S.GoogleButton>
        <S.FaceButton>
          <FaFacebookF className="Icon" />
          Crie sua conta com o Facebook
        </S.FaceButton>

        <S.Title>Crie sua conta</S.Title>

        <S.InputWrapper>
          <InputText
            value={email.value}
            setValue={(event) => {
              event.preventDefault();

              setEmail({ ...email, value: event.target.value });
            }}
            name="E-mail"
            borderColor={
              validateEmail() === 2 ? "red" : "var(--color-hover-darker)"
            }
            borderColorHover={
              validateEmail() === 0
                ? "var(--color-primary)"
                : validateEmail() === 1
                ? "green"
                : "red"
            }
          />
          <S.InputMessage>{email.validate.errorMsg}</S.InputMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText
            value={password.value}
            setValue={(event) => {
              event.preventDefault();

              setPassword({ ...password, value: event.target.value });
            }}
            name="Password"
            type="password"
            borderColor={
              validatePassword() === 2 ? "red" : "var(--color-hover-darker)"
            }
            borderColorHover={
              validatePassword() === 0
                ? "var(--color-primary)"
                : validatePassword() === 1
                ? "green"
                : "red"
            }
            onFocus={() => setPassword({ ...password, onFocus: true })}
            onBlur={() => setPassword({ ...password, onFocus: false })}
          />
          <S.InputMessage>{password.validate.errorMsg}</S.InputMessage>

          <S.InputBlock display={password.onFocus}>
            <S.InputBlockArrow />
            <h1>Deve Conter</h1>
            <p>Uma Letra Minuscula</p>
            <p>Uma Letra Maiscula</p>
            <p>Um Número</p>
          </S.InputBlock>
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText
            value={confirmPassword.value}
            setValue={(event) => {
              event.preventDefault();

              setConfirmPassword({
                ...confirmPassword,
                value: event.target.value,
              });
            }}
            name="Re-Password"
            type="password"
            borderColor={
              validateConfirmPassword() === 2
                ? "red"
                : "var(--color-hover-darker)"
            }
            borderColorHover={
              validateConfirmPassword() === 0
                ? "var(--color-primary)"
                : validateConfirmPassword() === 1
                ? "green"
                : "red"
            }
          />
          <S.InputMessage>{confirmPassword.validate.errorMsg}</S.InputMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText
            value={userName.value}
            setValue={(event) => {
              event.preventDefault();

              setUsername({ ...userName, value: event.target.value });
            }}
            name="Username"
            borderColor={
              validateUserName() === 2 ? "red" : "var(--color-hover-darker)"
            }
            borderColorHover={
              validateUserName() === 0
                ? "var(--color-primary)"
                : validateUserName() === 1
                ? "green"
                : "red"
            }
          />
          <S.InputMessage>{userName.validate.errorMsg}</S.InputMessage>
        </S.InputWrapper>
        {/* Genero */}
        {/* Aniversario */}

        <S.Button onClick={() => handleSubmit()}>Criar conta</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
