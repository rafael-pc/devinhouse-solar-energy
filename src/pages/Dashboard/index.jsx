import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Unidades from "../../components/Cards";
import Menu from "../../components/Menu";
import { Container } from "./styles";

// import Container from "../../components/Container";

function Dashboard() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    async function energyAPI() {
      try {
        const response = await axios.get("http://localhost:4000/unidades");
        setUnits(response.data);
      } catch (err) {
        alert(err);
      }
    }
    energyAPI();
  }, []);

  // console.log(units);
  

  return (
  
      <Container>
        <Menu />
          <Unidades 
          data={units}
          ></Unidades>
   
      </Container>
   
  );
}

export default Dashboard;
