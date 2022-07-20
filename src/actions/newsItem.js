import * as api from '../api'
import { FETCH_ONE } from '../constants/actionTypes'

export const getNewsItem = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchNewsItem(id) ;
        dispatch({type: FETCH_ONE, payload: data})
    } catch(e) { 
        console.log(e)
    }
}