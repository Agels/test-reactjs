import * as action from '../constant/constant';
const fromLocalStorage = localStorage.getItem("cart");
const intialState =  fromLocalStorage ? JSON.parse(fromLocalStorage) : [];

export const cartReducer = (state = intialState, {type, payload}) => {
    switch(type){
        case action.ADDCART:
               return [
                   ...state,{
                       ...payload.item,
                       qty: 1
                   }
               ]
       
        default :
           return state
    }

}