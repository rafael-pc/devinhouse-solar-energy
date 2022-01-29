// import React, { useContext } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { Link } from "react-router-dom";
import { Container, ContainerContent } from "./styles";
// import { UnitsRegisterContext } from "../../contexts/CadastroDeUnidades";

import React from "react";
import axios from "axios";
import { useState, useEffect, Children } from "react";
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

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              data.map((unit) => (
                <tr>
                  <td>{unit.id}</td>
                  <td>{unit.apelido}</td>
                  <td>{unit.local}</td>
                  <td>{unit.marca}</td>
                  <td>{unit.modelo}</td>
                  <td>
                    <Link to={`/units/:id${unit.id}`}>
                      <button>editar</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeUnit(unit);
                      }}
                    >
                      apagar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <Link to="/units/:id">
          <button>Nova Unidade</button>
        </Link>
      </ContainerContent>
    </Container>
  );
}

export default Register;
