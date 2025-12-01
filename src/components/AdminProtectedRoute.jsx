import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const AdminProtectedRoute = ({ children }) => {
  const currentUser = AuthService.getCurrentUser();

  // Si no hay usuario → obligatorio login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  let roles = [];

  try {
    // Intentar leer roles desde localStorage (si los guardaste allí)
    if (currentUser.roles) {
      roles = currentUser.roles;
    } else {
      // Decodificar roles desde el token
      const payload = JSON.parse(atob(currentUser.accessToken.split(".")[1]));
      roles = payload.roles || [];
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" />;
  }

  // Validación de rol admin
  if (!roles.includes("ROLE_ADMIN")) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminProtectedRoute;
