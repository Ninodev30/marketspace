import AppError from "@utils/AppError";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://10.1.1.109:3333'
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.data)
        return Promise.reject(new AppError(error.response.data.message));

    return Promise.reject(error);
});

export default api;