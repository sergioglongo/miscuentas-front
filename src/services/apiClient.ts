import axios, { InternalAxiosRequestConfig } from "axios";

const isDevelopment = import.meta.env.MODE === "development";
const baseURL = isDevelopment
  ? import.meta.env.VITE_URL_BACKEND_DEV
  : import.meta.env.VITE_URL_BACKEND_PROD;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config
);
