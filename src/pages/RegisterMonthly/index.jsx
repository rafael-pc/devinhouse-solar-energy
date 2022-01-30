import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
// import Input from "../../components/Input";
// import Container from "../../components/Container";

import { Container, ContainerContent, Form, Input, Submit, Select } from "./styles";
import axios from "axios";

function RegisterMonthly() {

  const [units, setUnits] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:4000/unidades")
        .then((resp) => setUnits(resp.data));
    }
    getData();
  }, []);

  const url = "http://localhost:4000/geracoes";
  const [data, setData] = useState({
    unidade: "",
    date: "",
    energy: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, {
        unidade: data.unidade,
        date: data.date,
        energia: data.energia,
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
        <Header title="Lançamento de geração mensal"></Header>

        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Unidade Geradora</label>
          <Select defaultValue="" onChange={(e) => handle(e)} id="unidade">
            <option value="" disabled>
              Selecione
            </option>
            {units.map((unidade, index) => {
              return <option key={index} value={unidade.id}>{unidade.apelido}</option>;
            })}
          </Select>

          <label>Mês/ano</label>
          <Input type="date" onChange={(e) => handle(e)} id="date"></Input>

          <label>Total Kw gerado</label>
          <Input type="text" onChange={(e) => handle(e)} id="energia"></Input>

          <Submit type="submit" value="Cadastrar"></Submit>
        </Form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterMonthly;
