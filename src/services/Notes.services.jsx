import axiosInstance from "../utils/AxiosInstance";


// NOTES APIs
export const getAllNotes = () => axiosInstance.get('/api/notes/all');
export const createNote = (data) => axiosInstance.post('/api/notes/create', data);
export const updateNote = (payload) => axiosInstance.put('/api/notes/update', payload);
export const getUserNotes = () => axiosInstance.get('/api/notes/user');
export const searchNotes = (query) =>
  axiosInstance.get(`/api/notes/search?${query.join('&')}`);
export const getNotesByCategory = (category) =>
  axiosInstance.get(`/api/notes/category?category=${encodeURIComponent(category)}`);