import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/Albergues.css";
import "../estilos/UsuarioDashboard.css";

export function Albergues() {
    const [albergues, setAlbergues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/shelters") // Ajusta la URL según tu backend
            .then((res) => res.json())
            .then((data) => {
                console.log("Albergues recibidos:", data); //
                setAlbergues(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al cargar albergues:", err);
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
                    <li className="nav-item active">
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
                    <h5>Albergues</h5>
                    <div className="user-info">
                        <span>xxxxxxxxxxxxx</span>
                        <i className="bi bi-person-circle user-icon"></i>
                    </div>
                </div>

                {/* Contenido */}
<div className="content">
  {loading ? (
    <p>Cargando albergues...</p>
  ) : albergues.length === 0 ? (
    <p>No hay albergues disponibles.</p>
  ) : (
    <div className="card-container">
      {albergues.map((a) => (
        <div key={a.id} className="card-box albergue">
          <img
            src={a.imageUrl || "https://via.placeholder.com/150"}
            alt={a.nombre || a.name}
            className="card-img"
          />
          <h6>{a.nombre || a.name}</h6>
          <p>{a.descripcion || a.description}</p>
          <p><strong>Dirección:</strong> {a.direccion || a.address}</p>
          <p><strong>Teléfono:</strong> {a.telefono || a.phone}</p>
        </div>
      ))}
    </div>
  )}
</div>
            </div>
        </div>
    );
}
