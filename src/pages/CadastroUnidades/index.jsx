import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { Container, ContainerContent } from "./styles";

function Register() {
  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Unidades"></Header>
        <div>Cadastro unidades</div>
      </ContainerContent>
    </Container>
  );
}

export default Register;
