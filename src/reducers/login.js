import { LOGIN } from "../constants/actionTypes";

export default (login=false, action) => {
    switch(action.type){
        case LOGIN : 
            return action.payload;
        default:
            return login;
    }
}