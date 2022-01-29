import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Dashboard, Register, Units } from "./styles";
import LogoImage from "../../images/logo.png";


import { FaChartPie, FaChartBar, FaCog } from "react-icons/fa";

function Menu() {
  return (
    <Container>
      <Logo src={LogoImage} alt="logo"></Logo>
      <Link to="/dashboard" className="link">
        <Dashboard>
          <FaChartPie className="chart-pie"/>
          <h3>Dashboard</h3>
        </Dashboard>
      </Link>
      <Link to="/units" className="link">
        <Units>
          <FaChartBar className="chart-bar"/>
          <h3>Unidade consumidora</h3>
        </Units>
      </Link>
      <Link to="/register_monthly" className="link">
        <Register>
          <FaCog className="cog"/>
          <h3>Cadastro de enérgia gerada</h3>
        </Register>
      </Link>
    </Container>
  );
}

export default Menu;
