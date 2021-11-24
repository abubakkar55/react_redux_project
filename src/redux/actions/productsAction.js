import { actionTypes } from "../contants/action-types";

export const setProducts = (products) =>{
    return{
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
};

export const selectedProduct = (product) =>{
    return{
        type: actionTypes.SET_CLICKED_PRODUCT,
        payload: product
    }
};
