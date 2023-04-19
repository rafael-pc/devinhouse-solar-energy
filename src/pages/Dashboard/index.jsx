import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";

import axios from "axios";
import Unidades from "../../components/Cards";
import Menu from "../../components/Menu";
import Linechart from "../../components/Chart";
import Header from "../../components/Header";

function Dashboard() {
  const [units, setUnits] = useState([]);
  const [generation, setGeneration] = useState([]);
  

  useEffect(() => {
    async function energyAPI() {
      try {
        const [unitsResponse, generationResponse] = await Promise.all([
        axios.get("http://localhost:4000/unidades"),
        axios.get("http://localhost:4000/geracoes")]);
        setUnits(unitsResponse.data);
        setGeneration(generationResponse.data);
      } catch (error) {
        alert("Falha ao carregar API: " + error);
      }
    }
    energyAPI();
  }, []);  

  return (
    <Container>
      <Menu />
      <Content>
        <Header title="Dashboard"></Header>
        <Unidades data1={units} data2={generation}></Unidades> 
        <Linechart />
      </Content>
    </Container>
  );
}

export default Dashboard;
