import axios from 'axios';
import authHeader from './auth-header'; // Reutilizamos el helper que crea la cabecera con el token

const API_URL = 'http://localhost:8080/donations';

/**
 * Crea una nueva donación enviando todos los datos del formulario al backend.
 * @param {object} donationData - El objeto con los datos del estado del formulario.
 */
const createDonation = (donationData) => {
  // Hacemos una petición POST a /donations, pasando los datos y el token de autorización
  return axios.post(API_URL, donationData, { headers: authHeader() });
};

/**
 * Obtiene el historial de donaciones del usuario que ha iniciado sesión.
 * Llama al endpoint /donations/my-history
 */
const getMyDonationHistory = () => {
    return axios.get(API_URL + "/my-history", { headers: authHeader() });
}

const DonationService = {
    createDonation,
    getMyDonationHistory,
};

export default DonationService;