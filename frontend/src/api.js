// HERE INTERCEPTORS WILL BE WRITTEN = MASKS FOR VARIOUS SERVICES

import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL
})


// will look in our local storage and see if it we have an access token and add that an auth-header to our request
api.interceptors.request.use(
    (config) => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api