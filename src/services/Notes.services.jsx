import axiosInstance from "../utils/AxiosInstance";


// NOTES APIs
export const getAllNotes = () => axiosInstance.get('/notes/all');
export const createNote = (data) => axiosInstance.post('/notes/create', data);
export const updateNote = (payload) => axiosInstance.put('/notes/update', payload);
export const getUserNotes = () => axiosInstance.get('/notes/user');
export const searchNotes = (query) =>
  axiosInstance.get(`/api/notes/search?${query.join('&')}`);
export const getNotesByCategory = (category) =>
  axiosInstance.get(`/notes/category?category=${encodeURIComponent(category)}`);