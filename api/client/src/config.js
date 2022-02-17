import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://abrighterday.herokuapp.com/api/"
})