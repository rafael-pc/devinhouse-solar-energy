import React, { useState } from "react";
import { FaRegEnvelope, FaLock } from "react-icons/fa";

import {
  Container,
  ContainerImage,
  Image,
  ContainerLogon,
  Logon,
  Logo,
  Text,
  Email,
  EmailInput,
  Password,
  PasswordInput,
  Submit,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ContainerImage>
        <Image></Image>
      </ContainerImage>
      <ContainerLogon>
        <Logon>
          <Logo></Logo>
          <Text>Seja bem vindo</Text>

          <Email>
            <FaRegEnvelope className="envelope-icon" />
            <EmailInput
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="E-mail"
            ></EmailInput>
          </Email>

          <Password>
            <FaLock className="lock-icon" />
            <PasswordInput
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Senha"
            ></PasswordInput>
          </Password>

          <Submit type="submit" value="Entrar"></Submit>
        </Logon>
      </ContainerLogon>
    </Container>
  );
}

export default Login;
