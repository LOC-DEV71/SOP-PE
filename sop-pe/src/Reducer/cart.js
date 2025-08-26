export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.payload.id,
                    infor: action.payload,
                    quantity: action.payload.quantity
                }
            ];

        case "UPDATE_QUANTITY":
            return state.map(item => {
                if(item.id === action.payload.id){
                    const newQuantity = item.quantity + action.payload.quantity;
                    if(newQuantity < 1){
                        return {...item, quantity: 1}
                    }else{
                        return {...item, quantity: newQuantity};
                    }
                }
                return item;
            })

            case "DELETE_ITEM":
                // console.log(action.id);
                return state.filter(item => item.id !== action.id);
            case "DELETE_ALL_ITEM":
               return [];
        default:
            return state;
    }
};
