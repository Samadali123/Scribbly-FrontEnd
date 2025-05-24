import axiosInstance from "../utils/AxiosInstance";

// AUTH APIs
export const registerUser = (data) => axiosInstance.post('/api/auth/register', data);
export const loginUser = (data) => axiosInstance.post('/api/auth/login', data);
export const logoutUser = () => axiosInstance.get('/api/auth/logout');
