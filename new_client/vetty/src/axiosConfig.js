// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' // Base URL for json-server or backend API
});

export default api;