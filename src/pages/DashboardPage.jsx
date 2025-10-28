import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserLayout from "../components/UserLayout";
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service"; // Importar AuthService para logout
import "../estilos/UsuarioDashboard.css";

function DashboardPage() {
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para guardar el mensaje de error

    useEffect(() => {
        DashboardService.getDashboardData().then(
            (response) => {
                setDashboardData(response.data);
                // ¡IMPORTANTE! Apagar el loading SÓLO si todo fue bien
                setLoading(false);
            },
            (err) => {
                // Si la petición falla, guardamos el error y también apagamos el loading
                console.error("Error al cargar el dashboard:", err);
                setError("No se pudieron cargar los datos del dashboard. Inténtalo de nuevo más tarde.");
                
                // Si el error es de autenticación, cerramos sesión
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    AuthService.logout();
                    navigate("/login");
                }

                // ¡LA LÍNEA MÁS IMPORTANTE!
                setLoading(false);
            }
        );
    }, [navigate]);

    // Renderizado condicional MEJORADO
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center vh-100"><h2>Cargando...</h2></div>;
    }

    if (error) {
        return <div className="d-flex justify-content-center align-items-center vh-100"><h2 className="text-danger">{error}</h2></div>;
    }

    return (
        <UserLayout pageTitle="Dashboard General">
            <section>
                <h6>Alimentos que puedes donar <Link to="/alimentos"><span>→</span></Link></h6>
                <div className="card-container">
                    {dashboardData?.latestFoods.map(food => (
                        <div key={food.id} className="card-box"><p>{food.name}</p></div>
                    ))}
                </div>
            </section>
            
            <section>
                <h6>Albergues <Link to="/albergues"><span>→</span></Link></h6>
                <div className="card-container">
                    {dashboardData?.latestShelters.map(shelter => (
                        <div key={shelter.id} className="card-box"><p>{shelter.name}</p></div>
                    ))}
                </div>
            </section>
            
            <section>
                <h6>ONGs <Link to="/ongs"><span>→</span></Link></h6>
                <div className="card-container">
                    {dashboardData?.latestNgos.map(ngo => (
                        <div key={ngo.id} className="card-box"><p>{ngo.name}</p></div>
                    ))}
                </div>
            </section>
        </UserLayout>
    );
}

export default DashboardPage;