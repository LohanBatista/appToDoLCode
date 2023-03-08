import axios from 'axios';

const api = axios.create({
  //Colocar o endereço de ip da maquina
  //Exemplo:
  //baseURL: "http://10.0.11.224:3333",
});

export default api;
