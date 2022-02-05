import React, { useState, useEffect } from "react";
import { ContainerChart } from "./styles";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import axios from "axios";

Chart.register(...registerables);

const Linechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/geracoes");
        setData(response.data);
      } catch (error) {
        alert("Falha ao carregar API: " + error);
      }
    }
    getData();
  }, []);

  let janeiro = data.filter((unit) => unit.date === "2021-01");
  let fevereiro = data.filter((unit) => unit.date === "2021-02");
  let marco = data.filter((unit) => unit.date === "2021-03");
  let abril = data.filter((unit) => unit.date === "2021-04");
  let maio = data.filter((unit) => unit.date === "2021-05");
  let junho = data.filter((unit) => unit.date === "2021-06");
  let julho = data.filter((unit) => unit.date === "2021-07");
  let agosto = data.filter((unit) => unit.date === "2021-08");
  let setembro = data.filter((unit) => unit.date === "2021-09");
  let outubro = data.filter((unit) => unit.date === "2021-10");
  let novembro = data.filter((unit) => unit.date === "2021-11");
  let dezembro = data.filter((unit) => unit.date === "2021-12");

  let totalJaneiro = janeiro.reduce((total, valor) => total + valor.energia, 0);
  let totalFevereiro = fevereiro.reduce((total, valor) => total + valor.energia,0);
  let totalMarco = marco.reduce((total, valor) => total + valor.energia, 0);
  let totalAbril = abril.reduce((total, valor) => total + valor.energia, 0);
  let totalMaio = maio.reduce((total, valor) => total + valor.energia, 0);
  let totalJunho = junho.reduce((total, valor) => total + valor.energia, 0);
  let totalJulho = julho.reduce((total, valor) => total + valor.energia, 0);
  let totalAgosto = agosto.reduce((total, valor) => total + valor.energia, 0);
  let totalSetembro = setembro.reduce((total, valor) => total + valor.energia, 0);
  let totalOutubro = outubro.reduce((total, valor) => total + valor.energia, 0);
  let totalNovembro = novembro.reduce((total, valor) => total + valor.energia, 0);
  let totalDezembro = dezembro.reduce((total, valor) => total + valor.energia, 0);

  return (
    <ContainerChart>
      <Line
        className="line"
        data={{
          labels: [
            "JAN",
            "FEV",
            "MAR",
            "ABR",
            "MAI",
            "JUN",
            "JUL",
            "AGO",
            "SET",
            "OUT",
            "NOV",
            "DEZ",
          ],
          datasets: [
            {
              label: "Total de energia gerada por mês",
              data: [
                totalJaneiro,
                totalFevereiro,
                totalMarco,
                totalAbril,
                totalMaio,
                totalJunho,
                totalJulho,
                totalAgosto,
                totalSetembro,
                totalOutubro,
                totalNovembro,
                totalDezembro,
              ],
              borderColor: ["rgba(55,81,255,1)"],
              lineTension: 0.4,
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
        }}
      ></Line>
    </ContainerChart>
  );
};

export default Linechart;
