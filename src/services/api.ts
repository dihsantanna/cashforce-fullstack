import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL ?? 'http://localhost:3001/',
});

export const requestData = async (endpoint:string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
