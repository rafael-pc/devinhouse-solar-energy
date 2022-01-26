import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Units from "./pages/Units";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/units" element={<Units />} />
      </Routes>
    </>
  );
}

export default App;
