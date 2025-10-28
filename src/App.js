import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuarioDashboard from "./components/UsuarioDashboard";
import Perfil from "./components/Perfil";
import {Albergues} from "./components/Albergues";
import Alimentos from "./components/Alimentos";
import {ONGs} from "./components/ONGs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioDashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/albergues" element={<Albergues />} />
        <Route path="/ongs" element={<ONGs />} />
      </Routes>
    </Router>
  );
}

export default App;