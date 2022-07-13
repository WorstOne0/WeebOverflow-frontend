import React, { useState, useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import * as S from "./styles";

import { InputText } from "../../components";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const LOGIN = gql`
  mutation Login(
    $email: String!
    $password: String!
    $thirdParty: String!
    $reCaptchaToken: String!
  ) {
    login(
      email: $email
      password: $password
      thirdParty: $thirdParty
      reCaptchaToken: $reCaptchaToken
    ) {
      id
      email
    }
  }
`;

const Login = () => {
  const [login] = useMutation(LOGIN);
  const history = useNavigate();
  const reRef = useRef();

  const [control, setControl] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setControl({ ...control, loading: true });

    const token = await reRef.current.executeAsync();
    reRef.current.reset();

    const { data } = await login({
      variables: { email, password, thirdParty: "None", reCaptchaToken: token },
    });

    data.login
      ? history("/")
      : setControl({
          ...control,
          laoding: false,
          error: true,
          errorMsg: "Login Invalido",
        });
  };

  return (
    <S.Container>
      <S.Content>
        <S.LoginContainer onSubmit={handleSubmit}>
          <S.Back onClick={() => history(-1)}>
            <BsArrowLeft />
          </S.Back>

          <S.LoginTitle>Login</S.LoginTitle>

          <S.InputWrapper>
            <InputText
              value={email}
              setValue={(event) => {
                event.preventDefault();

                setEmail(event.target.value);
              }}
              name="E-mail"
              borderColor={"var(--color-hover-darker)"}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputText
              value={password}
              setValue={(event) => {
                event.preventDefault();

                setPassword(event.target.value);
              }}
              name="Password"
              type="password"
              borderColor={"var(--color-hover-darker)"}
            />
          </S.InputWrapper>

          <S.Error opacity={control.error ? 1 : 0}>{control.errorMsg}</S.Error>

          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            size="invisible"
            ref={reRef}
          />

          <S.Button type="submit">Entrar</S.Button>
        </S.LoginContainer>

        <S.SignIn>
          <S.LabelOr>OU</S.LabelOr>
          <S.GoogleButton>
            <AiOutlineGoogle className="Icon" />
            Login com o Google
          </S.GoogleButton>
          <S.FaceButton>
            <FaFacebookF className="Icon" />
            Login com o Facebook
          </S.FaceButton>
        </S.SignIn>

        <Link to="/signUp" style={{ width: "100%", textDecoration: "none" }}>
          <S.SignUp>Novo por aqui? Crie sua conta!</S.SignUp>
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default Login;
