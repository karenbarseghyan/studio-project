export default (news=[], action) => {
    switch(action.type){
        case 'FETCH_ALL' : 
            return news;
        default:
            return news;
    }
}