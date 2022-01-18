import axios from "axios";
import qs from 'qs';
import { history } from 'App';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:4523/mock/577456' : '/api'

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

api.interceptors.response.use(({ data, status }) => {
  if (status === 401) {
    history.push('/login');
  }
  if (data instanceof Blob || data.success) {
    return data;
  } else {
    throw data.message;
  }
})