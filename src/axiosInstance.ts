// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseURL = "https://ca2963c0abf3762558e3.free.beeceptor.com/api/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
