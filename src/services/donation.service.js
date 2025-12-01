import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/donations';

/** Crear donación (USUARIO) */
const createDonation = (donationData) => {
  return axios.post(API_URL, donationData, {
    headers: authHeader()
  });
};

/** Obtener historial del usuario */
const getMyDonationHistory = () => {
  return axios.get(API_URL + "/my", {
    headers: authHeader()
  });
};

/** 🔥 ADMIN: obtener todas las donaciones */
const getAllDonations = () => {
  return axios.get(API_URL, {
    headers: authHeader()
  });
};

/** 🔥 ADMIN: cambiar estado */
const changeStatus = (id, newStatus) => {
  return axios.put(
    `${API_URL}/cambiar-estado/${id}?estado=${newStatus}`,
    {},
    { headers: authHeader() }
  );
};

const DonationService = {
  createDonation,
  getMyDonationHistory,
  getAllDonations,
  changeStatus
};

export default DonationService;
