import { getAPI, getUSER } from "../utils";

export const getProduct = async () =>{
    const result = await getAPI("products");
    return result;
}

export const getUserName = async () =>{
    const result = await getUSER("users");
    return result;
}