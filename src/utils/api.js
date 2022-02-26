import axios from "axios";
import qs from 'qs';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/' : '/api'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat', allowDots: true }),
})

api.interceptors.request.use(async config => {
  const token = await localStorage.getItem('Authorization');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `bearer ${token}`
    }
  }
  return config;
})

api.interceptors.response.use(({ data }) => {
  if (data instanceof Blob || data.code === 200) {
    return data;
  } else {
    return Promise.reject({message: data.msg});
  }
}, error => {
  if (error.response.status === 401) {
    window.location.href = '/login';
    error.message = '登录已过期';
  }
  if (error.message === 'Network Error') {
    error.message = '抱歉，系统正在维护中，请稍后重试！';
  }
  return Promise.reject(error);
})