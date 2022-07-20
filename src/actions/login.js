import { LOGIN } from '../constants/actionTypes';
import { setAuthToken } from '../token/setAuthToken';
import { isCredentialsCorrect } from '../utils/IsCreadentialsCorrect';
const jwt = require('jsonwebtoken');

export const logIn = (formData, navigate) => async(dispatch) =>  {
    const isHaveRights = isCredentialsCorrect(formData)
    if(isHaveRights){
        dispatch({type: LOGIN, payload: true});
        const token = jwt.sign({ payload: {username:'admin', password:'12345'}}, 'secret');
        localStorage.setItem("token", token);
        setAuthToken(token);
        navigate('/profile');
    }
}