import React, { useState } from "react";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import * as yup from "yup";

import {
  Container,
  ContainerImage,
  Image,
  ContainerLogon,
  Logon,
  Logo,
  Text,
  Submit,
  Form,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erros, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let currentErros = {};

    if (!email) {
      currentErros.email = "E-mail é obrigatorio.";
    }
    if (!password) {
      currentErros.password = "Senha é obrigatoria.";
    }
    if (password.length < 8 && password.length > 0) {
      currentErros.password =
        "Senha muito curta, deve ter no minimo 8 digitos.";
    }
    
    setErrors(currentErros);

    let addressFormData = {
      email: email,
      password: password,
    };

    addressSchema.isValid(addressFormData).then((valid) => {
      if (valid === true) {
        history("/dashboard");
      }
    });
  }
  
  const history = useNavigate();

  const addressSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });

  return (
    <Container>
      <ContainerImage>
        <Image/>
      </ContainerImage>
      <ContainerLogon>
        <Logon>
          <Logo></Logo>
          <Text>Seja bem vindo</Text>

          <Form onSubmit={handleSubmit}>
            <Input
              icon={<FaRegEnvelope className="icon" />}
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              errorMessage={erros.email}
            ></Input>

            <Input
              icon={<FaLock className="icon" />}
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              errorMessage={erros.password}
            ></Input>

            <Submit type="submit">Entrar</Submit>
          </Form>
        </Logon>
      </ContainerLogon>
    </Container>
  );
}

export default Login;
