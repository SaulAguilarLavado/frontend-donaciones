import React from "react";
import { Link } from "react-router-dom";
import "../estilos/AdminHistorialClientes.css";

export default function AdminHistorialClientes() {
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

      {/* Contenido principal */}
      <div className="main-content-admin">
        <div className="header-admin">
          <h5 className="header-title">Historial de Donativos</h5>
          <span className="admin-label">ADMIN</span>
          <span className="admin-user">xxxxxxxxxxxxx 👤</span>
        </div>

        <div className="historial-clientes-section">
          <div className="acciones">
            <input
              type="text"
              placeholder="Buscar por nombre, correo..."
              className="buscar-input"
            />
            <button className="btn-exportar">Exportar a CSV</button>
          </div>

          <h5>Últimas Donaciones Recibidas</h5>

          <div className="tabla-clientes">
            <table>
              <thead>
                <tr>
                  <th>Nombre de Usuario</th>
                  <th>Correo</th>
                  <th>Fecha Registro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Camila Flores</td>
                  <td>camila.f@...</td>
                  <td>xx/xx/xxxx</td>
                </tr>
                <tr>
                  <td>Mateo Rojas</td>
                  <td>mateo.r@...</td>
                  <td>xx/xx/xxxx</td>
                </tr>
                <tr>
                  <td>Alejandro Pérez</td>
                  <td>alejandro.p@...</td>
                  <td>xx/xx/xxxx</td>
                </tr>
                <tr>
                  <td>Laura Quispe</td>
                  <td>laura.q@...</td>
                  <td>xx/xx/xxxx</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
