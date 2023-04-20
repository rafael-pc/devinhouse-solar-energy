import React, { useState } from "react";
import { Container, ContainerContent, Form, Checkbox, Submit } from "./styles";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";

import axios from "axios";
import * as yup from "yup";

function RegisterUnits() {
  const url = "http://localhost:4000/unidades";

  const [erros, setErrors] = useState({});
  const [data, setData] = useState({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: "inativo",
  });

  if (data.status === "on") {
    setData((data.status = "ativo"));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let currentErros = {};

    if (!data.apelido) {
      currentErros.apelido = "Apelido é obrigatório.";
    }
    if (!data.local) {
      currentErros.local = "Local é obrigatório.";
    }
    if (!data.marca) {
      currentErros.marca = "Marca é obrigatória.";
    }
    if (!data.modelo) {
      currentErros.modelo = "Modelo é obrigatório.";
    }

    setErrors(currentErros);

    let addressFormData = {
      apelido: data.apelido,
      local: data.local,
      marca: data.marca,
      modelo: data.modelo,
    };

    addressSchema.isValid(addressFormData).then((valid) => {
      if (valid === true) {
        axios
          .post(url, {
            apelido: data.apelido,
            local: data.local,
            marca: data.marca,
            modelo: parseInt(data.modelo),
            status: data.status,
          })
          .then((resp) => resp.data);

        history("/units");
      }
    });
  }

  const history = useNavigate();

  const addressSchema = yup.object().shape({
    apelido: yup.string().required(),
    local: yup.string().required(),
    marca: yup.string().required(),
    modelo: yup.string().required(),
  });

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
        <Form onSubmit={handleSubmit}>
          <Input
            label="Apelido"
            onChange={(e) => handle(e)}
            type="text"
            id="apelido"
            errorMessage={erros.apelido}
          ></Input>

          <Input
            label="Local"
            onChange={(e) => handle(e)}
            type="text"
            id="local"
            errorMessage={erros.local}
          ></Input>

          <Input
            label="Marca"
            onChange={(e) => handle(e)}
            type="text"
            id="marca"
            errorMessage={erros.marca}
          ></Input>

          <Input
            label="Modelo"
            onChange={(e) => handle(e)}
            type="text"
            id="modelo"
            errorMessage={erros.modelo}
          ></Input>

          <label>
            <Checkbox onChange={(e) => handle(e)} type="checkbox" id="status" />
            Ativo
          </label>
          <Submit type="submit">Salvar</Submit>
        </Form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterUnits;
