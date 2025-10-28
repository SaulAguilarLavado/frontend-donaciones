import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes de protección
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

// Páginas de la aplicación
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AlimentosPage from "./pages/AlimentosPage";
import AlberguesPage from "./pages/AlberguesPage";
import ONGsPage from "./pages/ONGsPage";
import PerfilPage from "./pages/PerfilPage";
import FormularioPage from "./pages/FormularioPage";
import EstadoPedidoPage from "./pages/EstadoPedidoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- RUTAS PÚBLICAS --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* --- RUTAS PROTEGIDAS PARA USUARIOS --- */}
        <Route path="/dashboard" element={ <ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
        <Route path="/perfil" element={ <ProtectedRoute> <PerfilPage /> </ProtectedRoute> } />
        <Route path="/alimentos" element={ <ProtectedRoute> <AlimentosPage /> </ProtectedRoute> } />
        <Route path="/albergues" element={ <ProtectedRoute> <AlberguesPage /> </ProtectedRoute> } />
        <Route path="/ongs" element={ <ProtectedRoute> <ONGsPage /> </ProtectedRoute> } />
        
        {/* --- ¡NUEVAS RUTAS PROTEGIDAS! --- */}
        <Route path="/formulario" element={ <ProtectedRoute> <FormularioPage /> </ProtectedRoute> } />
        <Route path="/pedido" element={ <ProtectedRoute> <EstadoPedidoPage /> </ProtectedRoute> } />

        {/* --- RUTA PROTEGIDA PARA ADMIN --- */}
        <Route path="/admin-dashboard" element={ <AdminProtectedRoute> <AdminDashboardPage /> </AdminProtectedRoute> } />
        
        {/* --- RUTA FALLBACK --- */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;