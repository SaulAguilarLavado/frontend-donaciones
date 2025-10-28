import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="p-5 text-center bg-light rounded-3">
                <h1 className="display-5 fw-bold">Bienvenido al Portal de Donaciones</h1>
                <p className="fs-4">Únete a nuestra causa y ayuda a quienes más lo necesitan.</p>
                <Link className="btn btn-primary btn-lg mx-2" to="/login">Iniciar Sesión</Link>
                <Link className="btn btn-success btn-lg mx-2" to="/register">Regístrate Ahora</Link>
            </div>
        </div>
    );
};

export default HomePage;