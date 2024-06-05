import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 20000,
    headers: { 'Content-Type': 'application/json' },
})

export default axiosInstance;