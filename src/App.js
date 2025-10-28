import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuarioDashboard from "./components/UsuarioDashboard";
import Perfil from "./components/Perfil";
import DashboardAdmin from "./components/AdminDashboard";
import  Alimentos  from "./components/Alimentos";
import { Albergues } from "./components/Albergues";
import  {ONGs}  from "./components/ONGs";
import AdminPremios from "./components/AdminPremios";
import AdminHistorialClientes from "./components/AdminHistorialClientes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioDashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/albergues" element={<Albergues />} />
        <Route path="/ongs" element={<ONGs />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/premios" element={<AdminPremios />} />
        <Route path="/clientes" element={<AdminHistorialClientes />} />
      </Routes>
    </Router>
  );
}

export default App;