import React, { useState, useRef, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";

import * as S from "./styles";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { InputText, Loading } from "../../components";

const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $userName: String!
    $screenName: String!
    $thirdParty: String!
    $reCaptchaToken: String!
  ) {
    createUser(
      email: $email
      password: $password
      userName: $userName
      screenName: $screenName
      thirdParty: $thirdParty
      reCaptchaToken: $reCaptchaToken
    ) {
      id
      email
    }
  }
`;

const EMAIL_EXISTS = gql`
  mutation emailExists($email: String!) {
    emailExists(email: $email)
  }
`;

const USERNAME_EXISTS = gql`
  mutation userNameExists($userName: String!) {
    userNameExists(userName: $userName)
  }
`;

const initialState = {
  value: "",
  onFocus: false,
  validate: { error: false, errorMsg: "" },
};

const SignUp = () => {
  const history = useHistory();
  const [signUp] = useMutation(SIGN_UP);
  const [emailExists] = useMutation(EMAIL_EXISTS);
  const [userNameExists] = useMutation(USERNAME_EXISTS);
  const [control, setControl] = useState({
    loading: false,
    error: false,
    finished: false,
  });

  const reRef = useRef();
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(initialState);
  const [userName, setUsername] = useState(initialState);

  useEffect(() => {
    !email.validate.error &&
      emailExists({
        variables: { email: email.value },
      }).then((res) => {
        res.data.emailExists &&
          setEmail({
            ...email,
            validate: {
              ...email.validate,
              error: true,
              errorMsg: "Email ja existe",
            },
          });
      });
  }, [email, emailExists]);

  const validateEmail = () => {
    if (email.value.length === 0) return 0;

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) return 2;

    if (email.validate.error) return 2;

    return 1;
  };

  const validatePassword = () => {
    if (password.value.length === 0) return 0;

    if (password.value.length < 8 || password.value.length > 20) return 2;

    if (!/.*[a-z].*/.test(password.value)) return 2;

    if (!/.*[A-Z].*/.test(password.value)) return 2;

    if (!/\d/.test(password.value)) return 2;

    return 1;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.value.length === 0) return 0;

    if (password.value !== confirmPassword.value) return 2;

    return 1;
  };

  useEffect(() => {
    !userName.validate.error &&
      userNameExists({
        variables: { userName: userName.value },
      }).then((res) => {
        res.data.userNameExists &&
          setUsername({
            ...userName,
            validate: {
              ...userName.validate,
              error: true,
              errorMsg: "Username em uso",
            },
          });
      });
  }, [userName, userNameExists]);

  const validateUserName = () => {
    if (userName.value.length === 0) return 0;

    if (userName.value.length <= 5 || userName.value.length > 20) return 2;

    if (!/^[a-z0-9_-]*$/.test(userName.value)) return 2;

    if (userName.validate.error) return 2;

    return 1;
  };

  const handleSubmit = async () => {
    if (validateEmail() === 2 || validateEmail() === 0) return false;

    if (validatePassword() === 2 || validatePassword() === 0) return false;

    if (validateConfirmPassword() === 2 || validateConfirmPassword() === 0)
      return false;

    if (validateUserName() === 2 || validateUserName() === 0) return false;

    setControl({ ...control, loading: true });

    const token = await reRef.current.getValue();
    //reRef.current.reset();

    const res = await signUp({
      variables: {
        email: email.value,
        password: password.value,
        userName: userName.value,
        screenName: "",
        thirdParty: "None",
        reCaptchaToken: token,
      },
    });

    !res.data.createUser
      ? setControl({ ...control, loading: false, error: true })
      : setControl({ ...control, loading: false, finished: true });

    history.push("/login");
  };

  return (
    <S.Container>
      <S.Back onClick={() => history.goBack()}>
        <BsArrowLeft />
      </S.Back>

      {control.loading ? (
        <Loading height="100vh" size="120" />
      ) : control.error ? (
        <h1>error</h1>
      ) : control.finished ? (
        <h1>finished</h1>
      ) : (
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

                setEmail({
                  ...email,
                  value: event.target.value,
                  validate: { ...email.validate, error: false, errorMsg: "" },
                });
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
              name="Senha"
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
              name="Confirmar Senha"
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
          </S.InputWrapper>
          <S.InputWrapper>
            <InputText
              value={userName.value}
              setValue={(event) => {
                event.preventDefault();

                setUsername({
                  ...userName,
                  value: event.target.value,
                  validate: { ...email.validate, error: false, errorMsg: "" },
                });
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

          <S.ReCaptchaWrapper>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
              size="normal"
              ref={reRef}
            />
          </S.ReCaptchaWrapper>

          <S.Button onClick={() => handleSubmit()}>Criar conta</S.Button>
        </S.Content>
      )}
    </S.Container>
  );
};

export default SignUp;
