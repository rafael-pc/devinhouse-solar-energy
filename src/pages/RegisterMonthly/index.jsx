import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerContent,
  Form,
  Input,
  Submit,
  Select,
} from "./styles";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import axios from "axios";
import * as yup from "yup";

function RegisterMonthly() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    let isMounted = true; // Variável para rastrear se o componente está montado ou não

    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/unidades");
        setUnits(response.data);

        if (isMounted) {
          // Verificar se o componente está montado antes de atualizar o estado
          setData(response.data);
        }
      } catch (error) {
        alert("Falha ao carregar API: " + error);
      }
    }
    getData();
    // Função de limpeza para cancelar tarefas assíncronas antes de desmontar o componente
    return () => {
      isMounted = false; // Marcar o componente como desmontado ao retornar a função de limpeza
    };
  }, []);

  const [data, setData] = useState({
    unidade: "",
    date: "",
    energia: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    let addressFormData = {
      unidade: data.unidade,
      date: data.date,
      energia: data.energia,
    };

    const url = "http://localhost:4000/geracoes";

    addressSchema.isValid(addressFormData).then((valid) => {
      if (valid === true) {
        axios
          .post(url, {
            unidade: data.unidade,
            date: data.date,
            energia: parseInt(data.energia),
          })
          .then((resp) => resp.data);
        alert("Cadasto realizado");
      } else {
        alert("Todos os campos devem ser preenchidos");
      }
    });
  }

  const addressSchema = yup.object().shape({
    unidade: yup.string().required(),
    date: yup.string().required(),
    energia: yup.string().required(),
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
              return (
                <option key={index} value={unidade.id}>
                  {unidade.apelido}
                </option>
              );
            })}
          </Select>

          <label>Mês/ano</label>
          <Input
            type="month"
            onChange={(e) => handle(e)}
            id="date"
            className="date"
          ></Input>

          <label>Total Kw gerado</label>
          <Input 
            label="Energia"
            type="text" 
            onChange={(e) => handle(e)} 
            id="energia">
          </Input>

          <Submit type="submit" value="Cadastrar"></Submit>
        </Form>
      </ContainerContent>
    </Container>
  );
}

export default RegisterMonthly;
