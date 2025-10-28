import React from "react";
import { Link } from "react-router-dom";
import "../estilos/UsuarioDashboard.css";

function UsuarioDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/perfil" className="nav-link">
              Perfil
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/alimentos" className="nav-link">
              Alimentos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/albergues" className="nav-link">
              Albergues
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ongs" className="nav-link">
              ONGs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/formulario" className="nav-link">
              Formulario
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pedido" className="nav-link">
              Estado de Pedido
            </Link>
          </li>
        </ul>
        <button className="btn-logout">Cerrar Sesión</button>
      </div>
      {/* Contenido principal */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div></div>
          <div className="user-info">
            <span>xxxxxxxxxxxxx</span>
            <i className="bi bi-person-circle user-icon"></i>
          </div>
        </div>

        {/* Contenido */}
        <div className="content">
          <section>
            <h6>
              Alimentos que puedes donar <span>→</span>
            </h6>
            <div className="card-container">
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
            </div>
          </section>

          <section>
            <h6>
              Albergues <span>→</span>
            </h6>
            <div className="card-container">
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
            </div>
          </section>

          <section>
            <h6>
              ONGs <span>→</span>
            </h6>
            <div className="card-container">
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UsuarioDashboard;
