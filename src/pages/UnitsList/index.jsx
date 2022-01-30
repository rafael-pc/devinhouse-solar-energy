// import React, { useContext } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { Link } from "react-router-dom";
import {
  Container,
  ContainerContent,
  Row,
  Table,
  THeader,
  Edit,
  Delete,
  NewUnit,
} from "./styles";
// import { UnitsRegisterContext } from "../../contexts/CadastroDeUnidades";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import {useParams} from "react-router-dom"

function Register() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:4000/unidades")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  function removeUnit(unit) {
    axios.delete(`http://localhost:4000/unidades/${unit.id}`);

    removeFromTable(unit.id);
  }

  function removeFromTable(id) {
    const newData = data.filter((unit) => {
      if (unit.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setData(newData);
  }

  return (
    <Container>
      <Menu />
      <ContainerContent>
        <Header title="Unidades"></Header>
        <h3>Cadasto de Unidade Geradora</h3>
        <Table>
          <THeader>
            <tr>
              <th>Id</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th></th>
              <th></th>
            </tr>
          </THeader>
          <tbody>
            {data.map((unit ,index) => (
              <Row key={index}>
                <td>{unit.id}</td>
                <td>{unit.apelido}</td>
                <td>{unit.local}</td>
                <td>{unit.marca}</td>
                <td>{unit.modelo}W</td>
                <td>
                  {/* <Link to={`/edit/${unit.id}`}> */}
                  <Edit onChange={(e) => e.target.value}>editar</Edit>
                  {/* </Link> */}
                </td>
                <td>
                  <Delete
                    onClick={() => {
                      removeUnit(unit);
                    }}
                  >
                    apagar
                  </Delete>
                </td>
              </Row>
            ))}
          </tbody>
        </Table>

        <Link to="/units/:id" className="">
          <NewUnit>Nova Unidade</NewUnit>
        </Link>
      </ContainerContent>
    </Container>
  );
}

export default Register;
