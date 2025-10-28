import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import AuthService from "../services/auth.service"; // Importar AuthService
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importar para los iconos
import "../estilos/AdminDashboard.css";

// Cambiamos el nombre para que coincida con el nombre del archivo
const AdminDashboardPage = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-admin-container d-flex">
      {/* Sidebar */}
      <aside className="sidebar-admin">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin-dashboard" className="nav-link active">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donativos" className="nav-link">
              Historial de Donativos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clientes" className="nav-link">
              Historial Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/premios" className="nav-link">
              Premios
            </Link>
          </li>
        </ul>
        {/* Hacemos que el botón llame a la función handleLogout */}
        <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
      </aside>

      {/* Main content */}
      <main className="main-admin-content flex-grow-1">
        {/* Header */}
        <header className="header-admin d-flex justify-content-between align-items-center">
          <h5 className="fw-bold m-0">Dashboard General</h5>
          <div className="user-info d-flex align-items-center gap-2">
            <span>ADMINISTRADOR</span>
            <i className="bi bi-person-circle user-icon fs-4"></i>
          </div>
        </header>

        {/* Tarjetas de resumen */}
        <section className="resumen-section mt-4">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card resumen-card text-center p-3">
                <h6>Donaciones<br />(Este mes)</h6>
                <p className="fw-bold">xxxxx</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card resumen-card text-center p-3">
                <h6>Kilos Rescatados<br />(Este mes)</h6>
                <p className="fw-bold">xxxxx</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card resumen-card text-center p-3">
                <h6>Nuevos Usuarios<br />(Este mes)</h6>
                <p className="fw-bold">xxxxx</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rendimiento de donaciones */}
        <section className="rendimiento-section mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold">Rendimiento de Donaciones</h6>
            <p className="text-muted small m-0">Anual ↓</p>
          </div>

          <div className="grafico-donaciones text-center mt-4">
            {/* Aquí podrías integrar un gráfico real más adelante */}
            <div className="grafico-circulo mx-auto">
              <div className="porcentaje">24%</div>
            </div>
            <p className="text-muted mt-3">76% restante</p>
          </div>
        </section>

        {/* Últimas donaciones */}
        <section className="ultimas-donaciones mt-5">
          <h6 className="fw-bold">Últimas Donaciones Recibidas</h6>
          <div className="card ultima-card p-3 mt-3">
            <p>ID #12345 | Alejandro Pérez | Comedor "Manos..."</p>
          </div>
          <div className="card ultima-card p-3 mt-2">
            <p>ID #12344 | Sofía Castillo | Albergue "Luz..."</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboardPage;