import React from "react";
import { ContainerContent, Cards } from "./styles";

function Unidades({ data }) {

  let total = data.reduce((total, valor) => total + valor.modelo, 0) / data.length;
  let ativo = data.filter((unit) => unit.status === "on");
  let inativo = data.filter((unit) => unit.status === "inativo");

  return (
    <ContainerContent>
      <Cards>
        <div className="card1">
          <h3>Total unidades</h3>
          <span>{data.length}</span>
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
