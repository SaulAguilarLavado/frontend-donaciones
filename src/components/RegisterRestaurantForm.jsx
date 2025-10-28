import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const RegisterRestaurantForm = () => {
    const [formData, setFormData] = useState({
        restaurantName: '',
        ruc: '',
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

        AuthService.registerRestaurant(
            formData.restaurantName,
            formData.ruc,
            formData.phone,
            formData.email,
            formData.password
        ).then(
            () => {
                alert("¡Restaurante registrado exitosamente! Ahora puedes iniciar sesión.");
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
            {/* Campo Nombre del Restaurante */}
            <div className="mb-3">
                <label htmlFor="restaurantName" className="form-label">Nombre del Restaurante</label>
                <input type="text" className="form-control" id="restaurantName" value={formData.restaurantName} onChange={handleChange} required />
            </div>

            {/* Campo RUC */}
            <div className="mb-3">
                <label htmlFor="ruc" className="form-label">RUC</label>
                <input type="text" className="form-control" id="ruc" pattern="\d{11}" title="El RUC debe tener 11 dígitos" value={formData.ruc} onChange={handleChange} required />
            </div>

            {/* Campo Teléfono */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            {/* Campo Email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico de Contacto</label>
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
                <button type="submit" className="btn btn-primary">Registrar Restaurante</button>
            </div>
        </form>
    );
};

export default RegisterRestaurantForm;