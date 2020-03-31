import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getAllData = payload => api.get(`/data`);
export const getUsGrowthCurve = payload => api.get(`/us-growth-curve`);

const apis = {
  getAllData,
  getUsGrowthCurve
};

export default apis;
