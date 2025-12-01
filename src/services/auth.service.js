import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

const registerPerson = (name, lastname, dni, phone, email, password) => {
  return axios.post(API_URL + "register/person", { name, lastname, dni, phone, email, password });
};

const registerRestaurant = (restaurantName, ruc, phone, email, password) => {
  return axios.post(API_URL + "register/restaurant", { restaurantName, ruc, phone, email, password });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", { email, password })
    .then((response) => {
      if (response.data.accessToken) {
        const token = response.data.accessToken;
        const payload = JSON.parse(atob(token.split(".")[1]));

        const userData = {
          accessToken: token,
          email: payload.sub,
          roles: payload.roles || []
        };

        localStorage.setItem("user", JSON.stringify(userData));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  registerPerson,
  registerRestaurant,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;