import React from "react";
import Header from "../Header";

import { ContainerContent, Cards } from "./styles";

function Unidades({ data }) {
  //   console.log(data.length);

  let total = data.reduce((total, valor) => total + valor.modelo, 0) / data.length;
  let ativo = data.filter((unit) => unit.status === "ativo");
  let inativo = data.filter((unit) => unit.status === "inativo");

  return (
    <ContainerContent>
      <Header title="Dashboard"></Header>
      <Cards>
        <div>
          <h3>Total unidades</h3>
          <span>{data.length}</span>
        </div>
        <div>
          <h3>Unidades ativas</h3>
          <span>{ativo.length}</span>
        </div>
        <div>
          <h3>Unidades inativas</h3>
          <span>{inativo.length}</span>
        </div>
        <div>
          <h3>Média de energia</h3>
          <span>{total + " Kw"}</span>
        </div>
      </Cards>
    </ContainerContent>
  );
}

export default Unidades;
