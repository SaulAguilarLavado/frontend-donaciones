import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuarioDashboard from "./components/UsuarioDashboard";
import Perfil from "./components/Perfil";
import Pedido from "./components/Pedido";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioDashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/pedidos" element={<Pedido />} />
      </Routes>
    </Router>
  );
}

export default App;