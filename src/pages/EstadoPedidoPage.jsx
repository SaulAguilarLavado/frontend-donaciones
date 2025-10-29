import React, { useEffect, useState } from "react";
import axios from "axios";
import UserLayout from "../components/UserLayout";

const EstadoPedidoPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ⚙️ Endpoint de "mis pedidos"
  const API_URL = "http://localhost:8080/donations/my";

  useEffect(() => {
    const token = localStorage.getItem("token"); // token JWT

    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar pedidos:", err);
        setError("No se pudo cargar tu historial de donaciones.");
        setLoading(false);
      });
  }, []);

  return (
    <UserLayout pageTitle="Historial de Donaciones">
      <div className="container-fluid">
        <h2 className="mb-4">Mis Donaciones</h2>
        <p>
          Aquí puedes revisar tus donaciones y ver su estado actual:{" "}
          <strong>PENDIENTE</strong>, <strong>EN CAMINO</strong> o{" "}
          <strong>ENTREGADO</strong>.
        </p>

        {loading && <p>Cargando tus pedidos...</p>}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && orders.length === 0 && (
          <div className="alert alert-info">
            Aún no tienes donaciones registradas.
          </div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-light">
                <tr>
                  <th>ID Pedido</th>
                  <th>Alimento</th>
                  <th>Cantidad</th>
                  <th>Unidad</th>
                  <th>Fecha / Hora</th>
                  <th>Estado</th>
                  <th>Consumible</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.foodCategory}</td>
                    <td>{order.approximateQuantity}</td>
                    <td>{order.unit}</td>
                    <td>
                      {order.pickupDate} {order.pickupTime}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          order.status === "ENTREGADO"
                            ? "bg-success"
                            : order.status === "EN_CAMINO"
                            ? "bg-warning text-dark"
                            : "bg-secondary"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>{order.consumable ? "Sí" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default EstadoPedidoPage;
