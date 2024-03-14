import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/',
});

export default api;