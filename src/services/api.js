import axios from "axios";

const baseURL = 'https://randomuser.me/api';

export const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  }
})