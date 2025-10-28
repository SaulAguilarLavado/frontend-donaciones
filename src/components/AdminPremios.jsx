import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../estilos/AdminPremios.css";

export default function AdminPremios() {
  return (
    <div className="dashboard-admin-container d-flex">
      {/* ======= SIDEBAR (NO CAMBIADO) ======= */}
      <aside className="sidebar-admin">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/donativos" className="nav-link">
              Historial de Donativos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clientes" className="nav-link">
              Historial Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/premios" className="nav-link active">
              Premios
            </Link>
          </li>
        </ul>
        <button className="btn-logout">Cerrar Sesión</button>
      </aside>

      {/* ======= CONTENIDO PRINCIPAL ======= */}
      <div className="main-content-admin">
        {/* Header */}
        <div className="header-admin">
          <h5 className="header-title">Gestión de Premios y Ranking</h5>
          <div>
            <span className="admin-name">ADMIN</span>{" "}
            <span className="admin-user">xxxxxxxxxxxxxxxx</span>
            <i className="bi bi-person-circle ms-2"></i>
          </div>
        </div>

        {/* Gestión de Premios */}
        <div className="premios-section">
          <div className="premios-header">
            <h5>Gestionar Premios de Octubre</h5>
            <button className="btn-actualizar">ACTUALIZAR PREMIOS</button>
          </div>

          <div className="premios-card">
            <p>🥇 <strong>1er Puesto:</strong><br />
              2 Entradas Cineplanet + Combo<br />
              Imagen: cine.jpg <span className="cambiar">Cambiar Imagen</span>
            </p>

            <p>🥈 <strong>2do Puesto:</strong><br />
              Vale de S/50 en Bembos<br />
              Imagen: bembos.jpg <span className="cambiar">Cambiar Imagen</span>
            </p>

            <p>🥉 <strong>3er Puesto:</strong><br />
              1 Café + Postre Starbucks<br />
              Imagen: starbucks.jpg <span className="cambiar">Cambiar Imagen</span>
            </p>
          </div>
        </div>

        {/* Ranking */}
        <div className="ranking-section">
          <h5>Ranking Actual</h5>
          <div className="ranking-card">
            <ol>
              <li>Laura Quispe – 5,200 Pts (laura@...)</li>
              <li>Mateo Rojas – 4,850 Pts (mateo@...)</li>
              <li>Camila Flores – 4,700 Pts (camila@...)</li>
            </ol>
            <button className="btn-vermas">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

