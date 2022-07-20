import { AUTH } from "../constants/actionTypes";

export const auth = () => async(dispatch) =>  {
    if(localStorage.getItem("token")){
        dispatch({type: AUTH, payload: true});
    }
}