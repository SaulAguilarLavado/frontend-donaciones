import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import '../estilos/UsuarioDashboard.css'; // Reutilizamos el CSS

const UserLayout = ({ children, pageTitle }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate("/login");
    };

    // Decodificamos el token para obtener el email
    const user = AuthService.getCurrentUser();
    const userEmail = user ? JSON.parse(atob(user.accessToken.split('.')[1])).sub : "Usuario";

    const navItems = [
        // Este es el único lugar donde defines el orden. ¡Cámbialo aquí!
        { path: '/perfil', label: 'Perfil' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/alimentos', label: 'Alimentos' },
        { path: '/albergues', label: 'Albergues' },
        { path: '/ongs', label: 'ONGs' },
        { path: '/formulario', label: 'Formulario' },
        { path: '/pedido', label: 'Estado de Pedido' },
    ];

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <ul className="nav flex-column">
                    {navItems.map(item => (
                        <li key={item.path} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
                            <Link to={item.path} className="nav-link">{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
            </div>

            <div className="main-content">
                <div className="header">
                    <h5>{pageTitle}</h5>
                    <div className="user-info">
                        <span>{userEmail}</span>
                        <i className="bi bi-person-circle user-icon"></i>
                    </div>
                </div>
                <div className="content">
                    {children} {/* Aquí se renderizará el contenido de cada página */}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;