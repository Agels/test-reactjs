
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

import { productReducer } from "./productReducer";


export const reducer = combineReducers({
    product: productReducer,
    cart:cartReducer

})