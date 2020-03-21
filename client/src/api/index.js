import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export const getAllData = payload => api.get(`/data`);


const apis = {
    getAllData
}

export default apis