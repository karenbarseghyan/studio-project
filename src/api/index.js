import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8000'});

export const fetchNews = () => API.get(`/news`);

export const fetchNewsItem = (id) => API.get(`/news/${id}`);