import * as api from '../api'

export const getNews = () => async(dispatch) => {
    try {
        const { data } = await api.fetchNews() ;
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch(e) { 
        console.log(e)
    }
}