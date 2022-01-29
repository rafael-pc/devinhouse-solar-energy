import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Unidades from "../../components/Cards";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import {useParams} from "react-router-dom"
 
// import Container from "../../components/Container";

// import { UnitsRegisterContext } from "../../contexts/CadastroDeUnidades";

function Dashboard({data}) {
  const [units, setUnits] = useState([]);

  // const { units } = useContext(UnitsRegisterContext);

  const params = useParams();

  useEffect(() => {
    async function energyAPI() {
      try {
        const response = await axios.get(`http://localhost:4000/unidades?=race${params.id}`);
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
