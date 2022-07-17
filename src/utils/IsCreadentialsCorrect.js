export const isCredentialsCorrect = (creadentials) => {
    let isHaveRights = false;
    if(creadentials.username && creadentials.password) {
        isHaveRights = (creadentials.username === "admin") && (creadentials.password === "12345");
    }
    return isHaveRights;  
}