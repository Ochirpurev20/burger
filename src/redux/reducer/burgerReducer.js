import { act } from 'react-dom/test-utils';

const initialState = {
    ingredients: {
        Salad: 0,
        Cheese: 0,
        Bacon: 0,
        Meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
};
const INGREDIENT_PRICE = { Salad: 200, Cheese: 300, Bacon: 500, Meat: 1000 };
const reducer = (state = initialState, action) => {
    // console.log('reducerees', action);
    if (action.type === 'ADD_INGREDIENT') {
        return {
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ortsNer],
            purchasing: true,
        };
    } else if (action.type === 'REMOVE_INGREDIENT') {
      const newPrice = state.totalPrice - INGREDIENT_PRICE[action.ortsNer]
        return {
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
            },
            totalPrice: newPrice,
            purchasing: newPrice > 1000
        };
    }
    return state;
};

export default reducer;
