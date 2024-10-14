import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.status === 401) {
            if (window.localStorage.getItem('token')) window.localStorage.removeItem('token');
        }
        return Promise.reject(error.response);
    }
);

export default axiosInstance;
