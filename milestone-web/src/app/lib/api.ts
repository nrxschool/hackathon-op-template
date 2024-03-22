import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 2000
});

export default api