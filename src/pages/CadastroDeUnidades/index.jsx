import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";

import { Container, ContainerContent } from "./styles";

function Register() {
  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Unidades"></Header>
        <label>Apelido</label>
        <Input
            placeholder="Apelido"
            name="Apelido"
            type="text"
        ></Input>
        <label>Local</label>
        <Input
            placeholder="Local"
            name="Local"
            type="text"
        ></Input>
        <label>Marca</label>
        <Input
            placeholder="Marca"
            name="Marca"
            type="text"
        ></Input>
        <label>Modelo</label>
        <Input
            placeholder="Modelo"
            name="Modelo"
            type="text"
        ></Input>
        <input type="checkbox" />
        
        <button type="submit">Salvar</button>

      </ContainerContent>
    </Container>
  );
}

export default Register;
