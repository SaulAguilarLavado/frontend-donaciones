import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage('');
        AuthService.login(email, password).then(
            () => {
                navigate('/dashboard');
                window.location.reload();
            },
            (error) => {
                setMessage("Email o contraseña inválidos.");
            }
        );
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {message && <div className="alert alert-danger">{message}</div>}
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
        </form>
    );
};

export default LoginForm;