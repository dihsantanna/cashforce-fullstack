import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export const requestData = async (endpoint:string) => {
  const { data } = await axios.get(endpoint);
  return data;
};

export default api;
