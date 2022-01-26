import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { Link } from "react-router-dom";

import { Container, ContainerContent } from "./styles";

function Register() {
  return (
    <Container>
      <Menu/>
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
            <tr>
              <td>January</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>
                <button></button>
              </td>
              <td>
                <button></button>
              </td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
              <td>$80</td>
              <td>$80</td>
              <td>$80</td>
              <td>
                <button></button>
              </td>
              <td>
                <button></button>
              </td>
            </tr>
          </tbody>
        </table>

        <Link to="/register_units">
          <button>Nova Unidade</button>
        </Link>

      </ContainerContent>
    </Container>
  );
}

export default Register;
