import React, { useState, useEffect } from "react";
import { ContainerChart } from "./styles";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import axios from "axios";

Chart.register(...registerables);

const Linechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:4000/geracoes")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  let totalJaneiro = data.reduce((total, valor) => total + valor.energia, 0) / data.length;

  return (
    <ContainerChart>
      <Line
        className="line"
        data={{
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
          datasets: [
            {
              label: "Total de energia gerada por mês",
              data: [totalJaneiro, 660, 650, 670, 680, 660],
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
