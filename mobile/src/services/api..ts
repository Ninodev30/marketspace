import AppError from "@utils/AppError";
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://10.1.1.110:3333'
    // baseURL: 'http://1tasrars' a65ef0144262144e54c4-photo1.JPG
    //file:///data/user/0/com.mobile/cache/rn_image_picker_lib_temp_1edc1f4f-74b4-4719-86a7-e900e9ffb234.jpg
});

// api.interceptors.response.use((response) => response, (error) => {
//     if (error.response && error.response.data)
//         return Promise.reject(new AppError(error.response.data.message));

//     return Promise.reject(error);
// });

export default api;