import * as api from '../api'
import { FETCH_ALL } from '../constants/actionTypes'

export const getNews = () => async(dispatch) => {
    try {
        const { data } = await api.fetchNews() ;
        dispatch({type: FETCH_ALL, payload: data})
    } catch(e) { 
        console.log(e)
    }
}