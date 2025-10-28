import React, { useEffect, useState } from "react";
import UserLayout from "../components/UserLayout";
import DataService from "../services/data.service";
import "../estilos/ONGs.css";

export const ONGsPage = () => {
    const [ngos, setNgos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        DataService.getNgos()
            .then((response) => {
                setNgos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar ONGs:", error);
                setLoading(false);
            });
    }, []);
    
    return (
        <UserLayout pageTitle="ONGs">
            {loading ? <p>Cargando...</p> : (
                <div className="card-container">
                     {ngos.map((o) => (
                        <div key={o.id} className="card-box ong">
                           <img src={o.imageUrl || "https://via.placeholder.com/150"} alt={o.name} className="card-img" />
                            <h6>{o.name}</h6>
                            <p>{o.description}</p>
                            <p><strong>Dirección:</strong> {o.address}</p>
                            <p><strong>Teléfono:</strong> {o.phone}</p>
                        </div>
                    ))}
                </div>
            )}
        </UserLayout>
    );
}

export default ONGsPage;