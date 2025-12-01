import axios from "axios";

const API_URL = "http://localhost:8080/puntos/";

const getMisPuntos = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;

    return axios.get(API_URL + "mis", {
        headers: { Authorization: `Bearer ${token}` }
    });
};

const getRanking = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;

    return axios.get(API_URL + "ranking", {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export default { getMisPuntos, getRanking };
