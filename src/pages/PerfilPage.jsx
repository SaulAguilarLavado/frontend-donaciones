import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PuntosService from "../services/puntos.service";
import "../estilos/Perfil.css";

export default function Perfil() {
  const [puntos, setPuntos] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [totalPuntos, setTotalPuntos] = useState(0);
  const [miPosicion, setMiPosicion] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  // =======================
  // CARGAR MIS PUNTOS
  // =======================
  useEffect(() => {
    PuntosService.getMisPuntos().then((response) => {
      setPuntos(response.data);

      // Total de puntos del usuario
      const sum = response.data.reduce((acc, p) => acc + p.points, 0);
      setTotalPuntos(sum);
    });
  }, []);

  // =======================
  // CARGAR RANKING REAL
  // =======================
  useEffect(() => {
    PuntosService.getRanking().then((response) => {
      const lista = response.data;

      // Backend ya devuelve datos agrupados:
      // { nombreUsuario: "...", puntosTotales: 10 }

      const rankingFinal = lista.map((r, index) => ({
        nombre: r.nombreUsuario,
        puntos: r.puntosTotales,
        posicion: index + 1,
      }));

      setRanking(rankingFinal);

      // Buscar mi posición
      const pos =
        rankingFinal.find((r) => r.nombre === user.nombre)?.posicion || null;
      setMiPosicion(pos);
    });
  }, []);

  return (
    <div className="perfil-container d-flex">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <ul className="nav flex-column">
          <li>
            <Link to="/perfil" className="nav-link active">
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/alimentos" className="nav-link">
              Alimentos
            </Link>
          </li>
          <li>
            <Link to="/albergues" className="nav-link">
              Albergues
            </Link>
          </li>
          <li>
            <Link to="/ongs" className="nav-link">
              ONGs
            </Link>
          </li>
          <li>
            <Link to="/formulario" className="nav-link">
              Formulario
            </Link>
          </li>
          <li>
            <Link to="/pedido" className="nav-link">
              Estado de Pedido
            </Link>
          </li>
        </ul>
        <button className="btn-logout">Cerrar Sesión</button>
      </aside>

      {/* MAIN */}
      <main className="main-content flex-grow-1">
        {/* HEADER */}
        <header className="header d-flex justify-content-between align-items-center">
          <h5 className="fw-bold m-0">Mi Perfil</h5>
          <div className="user-info d-flex align-items-center gap-2">
            <span>{user.email}</span>
            <i className="bi bi-person-circle user-icon fs-4"></i>
          </div>
        </header>

        {/* MIS DATOS */}
        <section className="perfil-section mt-4">
          <div className="card datos-card p-4">
            <h6 className="fw-bold mb-3">Mis Datos</h6>

            <p>
              <strong>Total de Puntos Acumulados:</strong> {totalPuntos} pts
            </p>
            <hr />

            <h6 className="fw-bold">Historial de Puntos</h6>
            {puntos.length === 0 ? (
              <p>Aún no tienes puntos.</p>
            ) : (
              <ul>
                {puntos.map((p, i) => (
                  <li key={i}>
                    <strong>+{p.points} pts</strong> — {p.reason}
                    <br />
                    <small className="text-muted">
                      {new Date(p.dateAssigned).toLocaleString()}
                    </small>
                    <hr />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* RANKING */}
        <section className="ranking-section mt-4">
          <h6 className="fw-bold">Ranking Global de Donadores</h6>
          <p className="text-muted small">Competencia mensual</p>

          <ul className="lista-ranking">
            {ranking.map((r, i) => (
              <li key={i}>
                <strong>{r.posicion}.</strong> {r.nombre} — {r.puntos} pts
              </li>
            ))}
          </ul>

          {miPosicion && (
            <div className="mt-3 mi-ranking">
              <p>
                <strong>Tu posición actual:</strong> #{miPosicion}
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
