import axios from 'axios';

export const configAxios = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});
