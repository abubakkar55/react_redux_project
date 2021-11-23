import { actionTypes } from "../contants/action-types";

let initialState = [{
    id: 1,
    title: "Abu Bakkar",
    categorey: "programmer"
}];

export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case actionTypes?.SET_PRODUCTS:

            return state
        default:
            return state;
    }

}