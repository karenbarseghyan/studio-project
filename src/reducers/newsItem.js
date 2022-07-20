import { FETCH_ONE } from "../constants/actionTypes";

export default (newsItem=[], action) => {
    switch(action.type){
        case FETCH_ONE : 
            return action.payload;
        default:
            return newsItem;
    }
}