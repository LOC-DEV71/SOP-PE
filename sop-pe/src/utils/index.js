const API__DOMAIN = "http://localhost:3001/";

export const getAPI = async (path) =>{
    const response = await fetch(API__DOMAIN + path);
    const result = await response.json();
    return result;
}

export const getUSER = async (path) =>{
    const response = await fetch(API__DOMAIN + path)
    const result = response.json();
    return result;
}