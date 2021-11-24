import { actionTypes } from "../contants/action-types";

let initialState = [];

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes?.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CLICKED_PRODUCT:

            return { ...state, ...payload };
        default:
            return state
    }
};