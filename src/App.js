import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DashboardProvider } from "./contexts/Dashboard";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Units from "./pages/Unidades";
import CadastroUnidades from "./pages/CadastroUnidades"
import Register from "./pages/CadastroEnergia";

function App() {
  return (
    <>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/units" element={<Units />} />
          <Route path="/register_units" element={<CadastroUnidades />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </DashboardProvider>
    </>
  );
}

export default App;
