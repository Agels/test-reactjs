import * as action from '../constant/constant';
export const addcart = (item) => ({
    type:action.ADDCART,
    payload : {
        item: {
            ...item,
            product:item
        },
    }
   
});


