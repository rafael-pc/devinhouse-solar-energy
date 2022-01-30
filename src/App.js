import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Units from "./pages/UnitsList";
import RegisterUnits from "./pages/RegisterUnits";
import RegisterMonthly from "./pages/RegisterMonthly";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/units" element={<Units />} />
        <Route path="/units/:id" element={<RegisterUnits />} />
        <Route path="/register_monthly" element={<RegisterMonthly />} />
      </Routes>
    </>
  );
}

export default App;
