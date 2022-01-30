import React from "react";
import { Line } from "react-chartjs-2";
import { ContainerChart } from "./styles";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Linechart = () => {
  return (
    <ContainerChart>
      <Line
        className="line"
        data={{
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
          datasets: [
            {
              label: "Total de energia gerada por mês",
              data: [16, 19, 25, 27, 55, 46],
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
