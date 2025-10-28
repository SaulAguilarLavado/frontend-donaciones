import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterPersonForm from '../components/RegisterPersonForm';
import RegisterRestaurantForm from '../components/RegisterRestaurantForm';

const RegisterPage = () => {
    const [isPersonRegister, setIsPersonRegister] = useState(true);

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-lg-5">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="text-center mb-4">Registro</h2>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
                            <button className={`btn ${isPersonRegister ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsPersonRegister(true)}>Soy una Persona</button>
                            <button className={`btn ${!isPersonRegister ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsPersonRegister(false)}>Soy un Restaurante</button>
                        </div>
                        {isPersonRegister ? <RegisterPersonForm /> : <RegisterRestaurantForm />}
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