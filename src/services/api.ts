import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.vigarani.codes/'
});

export default api;

//baseURL: 'http://localhost:3333'
