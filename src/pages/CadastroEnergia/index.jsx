import React from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

// import Container from "../../components/Container";

import { Container, ContainerContent } from "./styles";

function Register() {
  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Lançamento de geração mensal"></Header>
      </ContainerContent>
    </Container>
  );
}

export default Register;
