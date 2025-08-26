export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product
});

export const updateQuantity = (id, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { id, quantity }
});
export const deteteItem = (id) => ({
    type: "DELETE_ITEM",
    id: id
});
export const deteteAllItem = () => ({
    type: "DELETE_ALL_ITEM"
});
