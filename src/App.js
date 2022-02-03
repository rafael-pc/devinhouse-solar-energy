import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Units from "./pages/UnitsList";
import RegisterUnits from "./pages/RegisterUnits";
import RegisterMonthly from "./pages/RegisterMonthly";
import EditUnits from "./pages/EditUnits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/units" element={<Units />} />
        <Route path="/edit/:id" element={<EditUnits />} />
        <Route path="/register_units" element={<RegisterUnits />} />
        <Route path="/register_monthly" element={<RegisterMonthly />} />
      </Routes>
    </>
  );
}

export default App;
