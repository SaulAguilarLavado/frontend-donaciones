import React from 'react';
import { Link } from 'react-router-dom';
import RegisterPersonForm from '../components/RegisterPersonForm';

const RegisterPage = () => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-lg-5">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="text-center mb-4">Registro</h2>
                        {/* Solo se muestra el formulario de persona */}
                        <RegisterPersonForm />
                        <div className="text-center mt-3">
                            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;