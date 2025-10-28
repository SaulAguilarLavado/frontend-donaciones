import React from "react";
import { Link } from "react-router-dom";
import "../estilos/UsuarioDashboard.css";
import "../estilos/Albergues.css";

export function Alimentos() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/perfil" className="nav-link">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item active">
            <Link to="/alimentos" className="nav-link">Alimentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/albergues" className="nav-link">Albergues</Link>
          </li>
          <li className="nav-item">
            <Link to="/ongs" className="nav-link">ONGs</Link>
          </li>
          <li className="nav-item">
            <Link to="/formulario" className="nav-link">Formulario</Link>
          </li>
          <li className="nav-item">
            <Link to="/pedido" className="nav-link">Estado de Pedido</Link>
          </li>
        </ul>
        <button className="btn-logout">Cerrar Sesión</button>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h5>Alimentos</h5>
          <div className="user-info">
            <span>xxxxxxxxxxxxx</span>
            <i className="bi bi-person-circle user-icon"></i>
          </div>
        </div>

        {/* Contenido sobre donativos de alimentos */}
        <div className="content">
          <h6>¿Qué puedes donar?</h6>
          <p>Las donaciones de alimentos ayudan a mantener la alimentación de personas en situación de vulnerabilidad en albergues y ONGs. Puedes donar productos no perecibles y en buen estado, incluyendo:</p>
          
          <ul>
            <li><strong>Enlatados:</strong> atún, sardinas, verduras, sopas, frijoles.</li>
            <li><strong>Cereales y granos:</strong> arroz, fideos, avena, quinua.</li>
            <li><strong>Lácteos:</strong> leche en polvo, leche UHT, queso envasado.</li>
            <li><strong>Panadería y snacks:</strong> galletas, pan empaquetado, frutos secos.</li>
            <li><strong>Bebidas y suplementos:</strong> jugos, néctares, suplementos nutricionales.</li>
          </ul>

          <h6>Consejos para tus donaciones:</h6>
          <ul>
            <li>Verifica que los alimentos estén en buen estado y dentro de la fecha de caducidad.</li>
            <li>Evita productos abiertos o dañados.</li>
            <li>Si es posible, agrupa los alimentos por categoría para facilitar su distribución.</li>
            <li>Incluye alimentos que sean fáciles de preparar y consumir.</li>
          </ul>

          <h6>Impacto de tus donativos:</h6>
          <p>Gracias a tus aportes, los albergues y ONGs pueden:</p>
          <ul>
            <li>Garantizar comidas diarias a niños, adultos y personas mayores en situación vulnerable.</li>
            <li>Proporcionar alimentos durante emergencias o desastres naturales.</li>
            <li>Apoyar programas de nutrición y educación alimentaria.</li>
          </ul>

          <p>Recuerda que cada pequeño aporte hace una gran diferencia en la vida de quienes más lo necesitan.</p>
        </div>
      </div>
    </div>
  );
}

export default Alimentos;
