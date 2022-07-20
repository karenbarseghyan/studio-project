import { combineReducers } from 'redux';
import news from './news'
import auth from './auth'
import newsItem from './newsItem'


export default combineReducers({
    news,
    auth,
    newsItem
})