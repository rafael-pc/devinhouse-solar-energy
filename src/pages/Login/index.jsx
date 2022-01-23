import React, { useState } from "react";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
// import logo from '../logo1.png';

import {
  Container,
  Logon,
  Email,
  Password,
  Submit,
  Text,
  Logo,
  Imagem,
  Imagem1,
  Retangle,
  Envelope,
  Lock
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      {/* <img
        src={require("../../image/logo1.png")}
        alt="Foto da carta"
      /> */}
      <Retangle>
        <Imagem></Imagem>
        <Imagem1></Imagem1>
      </Retangle>
      <Logon></Logon>
      <div>
        <Logo></Logo>
        <Text>Seja bem vindo</Text>
        <Email
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="E-mail"
        ></Email>

        <Envelope>
          <FaRegEnvelope className="envelope" />
        </Envelope>

        <Password
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Senha"
        ></Password>

        <Lock>
          <FaLock className="lock" />
        </Lock>

        <Submit type="submit" value="Entrar"></Submit>
      </div>
    </Container>
  );
}

export default Login;
