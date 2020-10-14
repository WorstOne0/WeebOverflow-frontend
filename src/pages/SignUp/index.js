import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { InputText } from "../../components";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUsername] = useState("");

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
        <S.InputWrapper>
          <InputText
            value={confirmPassword}
            setValue={(event) => {
              event.preventDefault();

              setConfirmPassword(event.target.value);
            }}
            name="Re-Password"
            type="password"
            borderColor={"var(--color-hover-darker)"}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputText
            value={userName}
            setValue={(event) => {
              event.preventDefault();

              setUsername(event.target.value);
            }}
            name="Username"
            borderColor={"var(--color-hover-darker)"}
          />
        </S.InputWrapper>
        {/* Genero */}
        {/* Aniversario */}

        <S.Button>Criar conta</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
