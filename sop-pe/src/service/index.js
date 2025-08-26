import { getAPI, getCART, getUSER } from "../utils";

export const getProduct = async () =>{
    const result = await getAPI("products");
    return result;
}

export const getUserName = async () =>{
    const result = await getUSER("users");
    return result;
}
export const getCartUser = async (userId) =>{
    const result = await getCART(`carts/${userId}`);
    return result;
}