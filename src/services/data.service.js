import axios from 'axios';
import authHeader from './auth-header'; // Lo crearemos en el siguiente paso

const API_URL = 'http://localhost:8080/';

const getFoods = () => {
    return axios.get(API_URL + 'foods', { headers: authHeader() });
};

const getShelters = () => {
    return axios.get(API_URL + 'shelters', { headers: authHeader() });
};

const getNgos = () => {
    return axios.get(API_URL + 'ngos', { headers: authHeader() });
};

const DataService = {
    getFoods,
    getShelters,
    getNgos,
};

export default DataService;