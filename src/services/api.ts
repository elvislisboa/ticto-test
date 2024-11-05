import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ticto-test.vercel.app/api',
});