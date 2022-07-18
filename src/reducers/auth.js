import { AUTH } from "../constants/actionTypes";

export default (auth=false, action) => {
    switch(action.type){
        case AUTH : 
            return action.payload;
        default:
            return auth;
    }
}