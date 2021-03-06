
import {ADD_TO_BASKET} from './actions';

export const initialState = {
    basket: [],
    user: null
}

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            return {state}
        default:
            return state;
    }
}

export default reducer;