import * as types from "../types";

export const initialState = {
  cart: [],
};
export const cartReduce = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART:
      return {
        ...state,
        cart: action.payload.cart,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    case types.DELETE_CART:
      return {
        ...state,
        cart: action.payload.cart,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    case types.UPDATE_CART:
      return {
        ...state,
        cart: action.payload.cart,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
};
