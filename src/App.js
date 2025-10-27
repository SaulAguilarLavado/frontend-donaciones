import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuarioDashboard from "./components/UsuarioDashboard";
import Perfil from "./components/Perfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioDashboard />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;