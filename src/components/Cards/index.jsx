import React from "react";
import { ContainerContent, Cards } from "./styles";

function Unidades({ data1, data2 }) {

  let total = data2.reduce((total, valor) => total + valor.energia, 0) / data2.length;
  let ativo = data1.filter((unit) => unit.status === "ativo");
  let inativo = data1.filter((unit) => unit.status === "inativo");

  return (
    <ContainerContent>
      <Cards>
        <div className="card1">
          <h3>Total unidades</h3>
          <span>{data1.length}</span>
        </div>
        <div className="card2">
          <h3>Unidades ativas</h3>
          <span>{ativo.length}</span>
        </div>
        <div className="card3">
          <h3>Unidades inativas</h3>
          <span>{inativo.length}</span>
        </div>
        <div className="card4">
          <h3>Média de energia</h3>
          <span>{total.toFixed(0) + "W"}</span>
        </div>
      </Cards>
    </ContainerContent>
  );
}

export default Unidades;
