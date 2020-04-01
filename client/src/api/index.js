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

async function AllPromise() {
  try {
    const response = await Promise.all([
      axios.get('http://localhost:5000/us-growth-curve'),
      axios.get('http://localhost:5000/data')
    ]);
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error); // catches both errors
  }
}

const apis = {
  getAllData,
  getUsGrowthCurve,
  AllPromise
};

export default apis;
