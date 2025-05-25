import axiosInstance from "../utils/AxiosInstance";

// AUTH APIs
export const registerUser = (data) => axiosInstance.post('/auth/register', data);
export const loginUser = (data) => axiosInstance.post('/auth/login', data);
export const logoutUser = () => axiosInstance.get('/auth/logout');
