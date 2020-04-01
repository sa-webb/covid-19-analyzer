import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getAllData = payload => api.get(`/data`);
export const getUsGrowthCurve = payload => api.get(`/us-growth-curve`);

export const getCSSE = () => {
  const promise1 = payload => api.get(`/data`)
  const promise2 = payload => api.get(`/us-growth-rate`)
  try {
    Promise.all([promise1, promise2]).then(function(values) {
      console.log(values[0].data[0].values);
      console.log(values[1].data.data);
    });
  } catch (error) {
    alert(error)
  }
}

const apis = {
  getAllData,
  getUsGrowthCurve
};

export default apis;
