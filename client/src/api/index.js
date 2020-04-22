import axios from 'axios';
import dotenv from 'dotenv'
import * as ENDPOINTS from '../constants/index';
dotenv.config()

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const usConfirmed = payload => api.get(ENDPOINTS.US_CONFIRMED);
export const usRecovered = payload => api.get(ENDPOINTS.US_RECOVERED);
export const usDeaths = payload => api.get(ENDPOINTS.US_DEATHS);

export const getAllUs = () => {
  try {
    Promise.all([usConfirmed, usRecovered, usDeaths]).then(function(values) {
      console.log(values[0].data[0].values);
      console.log(values[1].data[0].data);
      console.log(values[2].data[0].data);
    });
  } catch (error) {
    alert(error);
  }
};

const apis = {
  usConfirmed,
  usRecovered,
  usDeaths,
  getAllUs
};

export default apis;
