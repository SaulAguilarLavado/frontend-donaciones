import React, { useEffect, useState } from "react";
import UserLayout from "../components/UserLayout";
import DataService from "../services/data.service";
import "../estilos/Albergues.css";

export const AlberguesPage = () => {
    const [albergues, setAlbergues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        DataService.getShelters()
            .then((response) => {
                setAlbergues(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar albergues:", error);
                setLoading(false);
            });
    }, []);

    return (
        <UserLayout pageTitle="Albergues">
            {loading ? <p>Cargando...</p> : (
                <div className="card-container">
                    {albergues.map((a) => (
                        <div key={a.id} className="card-box albergue">
                            <img src={a.imageUrl || "https://via.placeholder.com/150"} alt={a.name} className="card-img" />
                            <h6>{a.name}</h6>
                            <p>{a.description}</p>
                            <p><strong>Dirección:</strong> {a.address}</p>
                            <p><strong>Teléfono:</strong> {a.phone}</p>
                        </div>
                    ))}
                </div>
            )}
        </UserLayout>
    );
}

export default AlberguesPage;