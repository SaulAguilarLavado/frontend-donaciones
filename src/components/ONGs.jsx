import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/ONGs.css"; // Reutilizamos el CSS de tarjetas
import "../estilos/UsuarioDashboard.css";

export function ONGs() {
    const [ngos, setNgos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/ngos") // URL del backend
            .then((res) => res.json())
            .then((data) => {
                console.log("ONGs recibidas:", data);
                setNgos(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al cargar ONGs:", err);
                setLoading(false);
            });
    }, []);

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
                    <li className="nav-item">
                        <Link to="/alimentos" className="nav-link">Alimentos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/albergues" className="nav-link">Albergues</Link>
                    </li>
                    <li className="nav-item active">
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
                <div className="header">
                    <h5>ONGs</h5>
                    <div className="user-info">
                        <span>xxxxxxxxxxxxx</span>
                        <i className="bi bi-person-circle user-icon"></i>
                    </div>
                </div>

<div className="content">
  {loading ? (
    <p>Cargando ONGs...</p>
  ) : ngos.length === 0 ? (
    <p>No hay ONGs disponibles.</p>
  ) : (
    <div className="card-container">
      {ngos.map((o) => (
        <div key={o.id} className="card-box ong">
          <img
            src={o.imageUrl || "https://via.placeholder.com/150"} // placeholder porque imageUrl es null
            alt={o.name} 
            className="card-img"
          />
          <h6>{o.name}</h6>
          <p>{o.description}</p>
          <p><strong>Dirección:</strong> {o.address}</p>
          <p><strong>Teléfono:</strong> {o.phone}</p>
        </div>
      ))}
    </div>
  )}
</div>
            </div>
        </div>
    );
}
