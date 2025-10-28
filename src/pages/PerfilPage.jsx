import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/Perfil.css";

export default function Perfil() {
  return (
    <div className="perfil-container d-flex">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/perfil" className="nav-link active">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
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
      </aside>

      {/* Main content */}
      <main className="main-content flex-grow-1">
        {/* Header */}
        <header className="header d-flex justify-content-between align-items-center">
          <h5 className="fw-bold m-0">Mi Perfil</h5>
          <div className="user-info d-flex align-items-center gap-2">
            <span>xxxxxxxxxxxxx</span>
            <i className="bi bi-person-circle user-icon fs-4"></i>
          </div>
        </header>

        {/* Datos personales */}
        <section className="perfil-section mt-4">
          <div className="card datos-card p-4">
            <h6 className="fw-bold mb-3">Mis Datos</h6>
            <div className="row g-3">
              <div className="col-md-6">
                <p><strong>Nombre:</strong> xxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="col-md-6">
                <p><strong>Fecha de Nacimiento:</strong> xx/xx/xxxx</p>
              </div>
              <div className="col-md-6">
                <p><strong>Correo Electrónico (no editable):</strong><br />xxxxxxxxxxxx@xxx.com</p>
              </div>
              <div className="col-md-6">
                <p><strong>Número de Celular:</strong> +51 xxx-xxx-xxx</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ranking de donantes */}
        <section className="ranking-section mt-4">
          <h6 className="fw-bold mb-3">Rankings de Donantes</h6>
          <p className="text-muted small">¡Los 3 primeros puestos ganan premios este mes!</p>

          {/* Premios */}
          <div className="premios d-flex flex-wrap justify-content-around gap-3 mt-3">
            <div className="premio-card text-center">
              <span className="medalla oro">🥇</span>
              <h6 className="fw-bold mt-2">PUESTO 1</h6>
              <p>2 Entradas 3D para Cineplanet + Combo</p>
            </div>
            <div className="premio-card text-center">
              <span className="medalla plata">🥈</span>
              <h6 className="fw-bold mt-2">PUESTO 2</h6>
              <p>Vale de S/50 en Bembos</p>
            </div>
            <div className="premio-card text-center">
              <span className="medalla bronce">🥉</span>
              <h6 className="fw-bold mt-2">PUESTO 3</h6>
              <p>1 Café + Postre en Starbucks</p>
            </div>
          </div>

          {/* Tabla de ranking */}
          <div className="ranking-list mt-4 p-3 rounded shadow-sm">
            <ol className="mb-0">
              <li>Laura Quispe – 5,200 Puntos</li>
              <li>Mateo Rojas – 4,850 Puntos</li>
              <li>Camila Flores – 4,700 Puntos</li>
              <li>Javier Mendoza – 4,550 Puntos</li>
              <li>Sofía Castillo – 4,400 Puntos</li>
            </ol>
            <a href="#" className="ver-mas">Ver más</a>
            <div className="mi-ranking mt-3">
              <p><strong>28. Tú</strong> – 2,100 Puntos</p>
              <p className="text-muted small">¡Te faltan 150 puntos para subir de puesto!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
