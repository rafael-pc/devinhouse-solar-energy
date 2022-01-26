import React from "react";
import Menu from "../../components/Menu";

import { Container, ContainerDashboard,  Header, Cards } from "./styles";

function Dashboard() {
  return (
    <>
      <Container>
        <Menu />
        <ContainerDashboard>
          <Header>
            <h1>Dashboard</h1>
          </Header>
          <Cards>
            <div>Total unidades</div>
            <div>Unidades ativas</div>
            <div>Unidades inativas</div>
            <div>Média de energia</div>
          </Cards>
        </ContainerDashboard>
      </Container>
    </>
  );
}

export default Dashboard;
