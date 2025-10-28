import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const RegisterPersonForm = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        lastname: '', 
        dni: '', 
        phone: '', 
        email: '', 
        password: '' 
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage('');

        AuthService.registerPerson(
            formData.name, 
            formData.lastname, 
            formData.dni, 
            formData.phone, 
            formData.email, 
            formData.password
        ).then(
            () => {
                alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
                navigate('/login');
            },
            (error) => {
                // El backend devuelve el mensaje de error directamente como texto
                const resMessage = error.response?.data || error.message || error.toString();
                setMessage(resMessage);
            }
        );
    };

    return (
        <form onSubmit={handleRegister}>
            {/* Campo Nombre */}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
            </div>

            {/* Campo Apellido */}
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="lastname" value={formData.lastname} onChange={handleChange} required />
            </div>

            {/* Campo DNI */}
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="text" className="form-control" id="dni" pattern="\d{8}" title="El DNI debe tener 8 dígitos" value={formData.dni} onChange={handleChange} required />
            </div>

            {/* Campo Teléfono */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Número de Celular</label>
                <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            {/* Campo Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
            </div>

            {/* Campo Contraseña */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required minLength="6" />
            </div>
            
            {/* Mensaje de error (si existe) */}
            {message && (
                <div className="alert alert-danger mt-3" role="alert">
                    {message}
                </div>
            )}

            {/* Botón de envío */}
            <div className="d-grid mt-3">
                <button type="submit" className="btn btn-primary">Registrarme</button>
            </div>
        </form>
    );
};

export default RegisterPersonForm;