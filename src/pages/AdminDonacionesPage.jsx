import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DonationService from "../services/donation.service";
import AuthService from "../services/auth.service";
import "../estilos/AdminDashboard.css"; 
import "../estilos/AdminDonaciones.css";

export default function AdminDonacionesPage() {

  const navigate = useNavigate();
  const [donaciones, setDonaciones] = useState([]);

  const cargar = () => {
    DonationService.getAllDonations()
      .then(res => setDonaciones(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    cargar();
  }, []);

  const cambiarEstado = (id, estado) => {
    DonationService.changeStatus(id, estado)
      .then(() => {
        alert("Estado actualizado correctamente");
        cargar();
      })
      .catch(() => alert("Error actualizando estado"));
  };

  // LOGOUT
  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-admin-container d-flex">
      
      {/* SIDEBAR */}
      <aside className="sidebar-admin">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin-dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-donaciones" className="nav-link active">
              Gestionar Donaciones
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="btn-logout">
          Cerrar Sesión
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-admin-content flex-grow-1">
        
        {/* HEADER */}
        <header className="header-admin d-flex justify-content-between align-items-center">
          <h5 className="fw-bold m-0">Gestionar Donaciones</h5>
          <div className="user-info d-flex align-items-center gap-2">
            <span>ADMINISTRADOR</span>
            <i className="bi bi-person-circle user-icon fs-4"></i>
          </div>
        </header>

        {/* TABLA */}
        <div className="container mt-4">

          <table className="table table-striped table-bordered">
            <thead>
  <tr>
    <th>ID</th>
    <th>Alimento</th>
    <th>Descripcion</th>
    <th>Direccion Recojo</th>
    <th>Telefono</th>
    <th>Cantidad</th>
    <th>Tipo Beneficiario</th>
    <th>Beneficiario</th>
    <th>Donante</th>
    <th>Identificación</th> 
    <th>Fecha / Hora</th>
    <th>Estado</th>
    <th>Acciones</th>
  </tr>
</thead>
<tbody>
  {donaciones.map(d => (
    <tr key={d.id}>
      <td>{d.id}</td>
      <td>{d.foodCategory}</td>
      <td>{d.description}</td>
      <td>{d.pickupAddress}</td>
      <td>{d.contactPhone}</td>
      <td>{d.approximateQuantity + " " + d.unit}</td>
      <td>{d.beneficiaryType}</td>
      <td>{d.beneficiaryName || "-"}</td>
      <td>{d.donorName || "-"}</td>
      <td>{d.identificationType || "-"}</td>
      <td>{d.pickupDate} {d.pickupTime}</td>
      <td>
        <span className={`badge bg-${d.status.toLowerCase()}`}>
          {d.status}
        </span>
      </td>
      <td>
        {d.status !== "COMPLETADA" && (
          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => cambiarEstado(d.id, "COMPLETADA")}
          >
            Completar
          </button>
        )}
        {d.status !== "CANCELADA" && (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => cambiarEstado(d.id, "CANCELADA")}
          >
            Cancelar
          </button>
        )}
      </td>
    </tr>
  ))}
</tbody>

          </table>

        </div>
      </main>
    </div>
  );
}
