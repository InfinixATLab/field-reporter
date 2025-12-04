import axios from 'axios';

// Use seu IPv4 local + porta do backend
const API_URL = 'http://192.168.15.2:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
