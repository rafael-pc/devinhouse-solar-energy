import React, { useState } from "react";
import { Container, ContainerContent, Form, Checkbox, Submit } from "./styles";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import axios from "axios";

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
          <Input
            width={"50%"}
            label="Apelido"
            onChange={(e) => handle(e)}
            type="text"
            id="apelido"
          ></Input>
          <Input
            label="Local"
            onChange={(e) => handle(e)}
            type="text"
            id="local"
          ></Input>
          <Input
            label="Marca"
            onChange={(e) => handle(e)}
            type="text"
            id="marca"
          ></Input>
          <Input
            label="Modelo"
            onChange={(e) => handle(e)}
            type="text"
            id="modelo"
          ></Input>

          <label>
            <Checkbox onChange={(e) => handle(e)} type="checkbox" id="status" />{" "}
            Ativo
          </label>
          <Submit type="submit">Salvar</Submit>
        </Form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterUnits;
