import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const AdminProtectedRoute = ({ children }) => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    // Decodificamos el token para ver los roles
    const roles = JSON.parse(atob(currentUser.accessToken.split('.')[1])).roles;

    // Si no incluye el rol de ADMIN, lo mandamos al dashboard de usuario
    if (!roles.includes('ROLE_ADMIN')) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default AdminProtectedRoute;