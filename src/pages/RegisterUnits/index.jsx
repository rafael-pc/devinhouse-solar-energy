import React, { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import axios from "axios";

// import { UnitsRegisterContext } from "../../contexts/CadastroDeUnidades";

import { Container, ContainerContent, Form, Checkbox, Submit } from "./styles";

function RegisterUnits() {
  const url = "http://localhost:4000/unidades";
  const [data, setData] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: "inativo",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, {
        apelido: data.apelido,
        local: data.local,
        marca: data.marca,
        modelo: parseInt(data.modelo),
        status: data.status,
      })
      .then((resp) => resp.data);
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Unidades"></Header>
        <h3>Cadasto de Unidade Geradora</h3>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* <label>Apelido</label> */}
          <Input
            label="Apelido"
            // placeholder="Apelido"
            onChange={(e) => handle(e)}
            type="text"
            id="apelido"
          ></Input>
          {/* <label>Local</label> */}
          <Input
            label="Local"
            // placeholder="Local"
            onChange={(e) => handle(e)}
            type="text"
            id="local"
          ></Input>
          {/* <label>Marca</label> */}
          <Input
            label="Marca"
            // placeholder="Marca"
            onChange={(e) => handle(e)}
            type="text"
            id="marca"
          ></Input>
          {/* <label>Modelo</label> */}
          <Input
            label="Modelo"
            // placeholder="Modelo"
            onChange={(e) => handle(e)}
            type="text"
            id="modelo"
          ></Input>
          <Checkbox onChange={(e) => handle(e)} type="checkbox" id="status" />
          <label>Ativo</label>
          <Submit type="submit">Salvar</Submit>
        </Form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterUnits;
