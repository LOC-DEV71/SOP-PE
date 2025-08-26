import {combineReducers} from "redux";
import { CartReducer } from "./cart";
const allReducer = combineReducers({
    CartReducer,
    //Thêm nhiều reducer ở đây
});

export default allReducer;