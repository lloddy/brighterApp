import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://abrighterday.herokuapp.com/api/"
})
// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:3001/api/"
// })