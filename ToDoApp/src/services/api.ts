import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.100.120:3333', //LCODE
  baseURL: 'http://10.0.11.216:3333', // Pedro
});

export default api;
