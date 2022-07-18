import { AUTH } from '../constants/actionTypes';
import { isCredentialsCorrect } from '../utils/IsCreadentialsCorrect';

export const logIn = (formData, navigate) => async(dispatch) =>  {
    const isHaveRights = isCredentialsCorrect(formData)
    if(isHaveRights){
        dispatch({type: AUTH, payload: true})
        navigate('/profile');
    }
}