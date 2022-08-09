import * as action from '../constant/constant';
// const getFromLocal = localStorage.getItem('product');
// const productDetail = getFromLocal? localStorage
const intialState = {
    product :[],
    productDetail:{},
    loading:false
}

export const productReducer = (state = intialState, {type, payload}) => {

    switch(type){
       case action.PRODUCTLOADING :
           return {
               ...state,
               loading:true
           }
        case action.PRODUCT:
            return {
                ...state,
                product:payload,
                loading:false
            }
        case action.PRODUCTDETAIL:
            return {
                productDetail:payload,
                loading:false
            }
        default :
        return state;
    }
}