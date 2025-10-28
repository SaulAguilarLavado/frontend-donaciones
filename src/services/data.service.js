import axios from 'axios';
import authHeader from './auth-header'; // Este helper también debe existir

const API_URL = 'http://localhost:8080/';

// Función para obtener la lista COMPLETA de albergues
const getShelters = () => {
    return axios.get(API_URL + 'shelters', { headers: authHeader() });
};

// Función para obtener la lista COMPLETA de ONGs
const getNgos = () => {
    return axios.get(API_URL + 'ngos', { headers: authHeader() });
};

const DataService = {
    getShelters,
    getNgos,
};

// Asegúrate de que estás exportando el objeto correctamente
export default DataService;