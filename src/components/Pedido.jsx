import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Pedido() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/orders") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los pedidos");
        }
        return response.json();
      })
      .then((data) => {
        setPedidos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Cargando pedidos...</div>;
  if (error) return <div className="alert alert-danger mt-5 text-center">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📦 Historial de Pedidos</h2>

      {pedidos.length === 0 ? (
        <div className="alert alert-info text-center">No hay pedidos registrados.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Alimento</th>
                <th>Donante</th>
                <th>Fecha de Creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.alimentoNombre || pedido.alimentoId}</td>
                  <td>{pedido.donanteNombre || pedido.donanteId}</td>
                  <td>{new Date(pedido.fechaCreacion).toLocaleString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        pedido.estado === "PENDIENTE"
                          ? "bg-warning text-dark"
                          : pedido.estado === "ENTREGADO"
                          ? "bg-success"
                          : pedido.estado === "EN_PROCESO"
                          ? "bg-info text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {pedido.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Pedido;