import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
                        <LoginForm />
                        <div className="text-center mt-3">
                            <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;