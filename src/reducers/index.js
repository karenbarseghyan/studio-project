import { combineReducers } from 'redux';
import news from './news'
import login from './login'
import newsItem from './newsItem'
import auth from './auth';


export default combineReducers({
    news,
    login,
    newsItem,
    auth
})