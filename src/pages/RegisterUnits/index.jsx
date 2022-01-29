import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import axios from "axios";

// import { UnitsRegisterContext } from "../../contexts/CadastroDeUnidades";

import { Container, ContainerContent } from "./styles";

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
        <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
        >
          <label>Apelido</label>
          <Input
            placeholder="Apelido"
            onChange={(e)=> handle(e)}
            type="text"
            id="apelido"
          ></Input>
          <label>Local</label>
          <Input
            placeholder="Local"
            onChange={(e)=> handle(e)}
            type="text"
            id="local"
          ></Input>
          <label>Marca</label>
          <Input
            placeholder="Marca"
            onChange={(e)=> handle(e)}
            type="text"
            id="marca"
          ></Input>
          <label>Modelo</label>
          <Input
            placeholder="Modelo"
            onChange={(e)=> handle(e)}
            type="text"
            id="modelo"

          ></Input>
          <input 
          onChange={(e)=> handle(e)}
          type="checkbox" 
          id="status"
          />

          <input type="submit" value="Cadastar"></input>
        </form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterUnits;
