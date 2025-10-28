import axios from 'axios';
import authHeader from './auth-header'; // Importamos el helper para las cabeceras

// Definimos la URL base de tu API.
const API_URL = 'http://localhost:8080/';

/**
 * Función para obtener los datos de vista previa del dashboard.
 * Hace una petición GET al endpoint /dashboard.
 */
const getDashboardData = () => {
  // axios.get(URL, { headers: ... })
  // El segundo argumento de axios.get es un objeto de configuración.
  // Aquí usamos el helper 'authHeader()' para añadir automáticamente
  // el encabezado 'Authorization: Bearer <token>' a la petición.
  return axios.get(API_URL + 'dashboard', { headers: authHeader() });
};

const DashboardService = {
    getDashboardData,
};

export default DashboardService;