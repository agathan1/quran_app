import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

const surahClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_DOA_URL,
});

export { apiClient, surahClient };
