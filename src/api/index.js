import axios from 'axios'

const url = 'http://localhost:8000/news';

export const fetchNews = () => axios.get(url);