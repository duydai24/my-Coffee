import { ADD_CART, DELETE_CART, UPDATE_CART, HANDLE_CART } from "../types";

export const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: (state.totalQuantity += action.payload.quantity),
        totalPrice: (state.totalPrice +=
          action.payload.quantity * action.payload.price),
      };
    case DELETE_CART:
      const newDataCart = [...state.cart];
      let filterDeleteCart = newDataCart.filter((e) => e.id === action.payload);
      let keyDelete = newDataCart.indexOf(...filterDeleteCart);
      newDataCart.splice(keyDelete, 1);
      let totalQuantityDelete = 0;
      let totalPriceDelete = 0;
      newDataCart.forEach((e) => {
        totalQuantityDelete += e.quantity;
        totalPriceDelete += e.quantity * e.price;
      });
      return {
        ...state,
        cart: newDataCart,
        totalQuantity: totalQuantityDelete,
        totalPrice: totalPriceDelete,
      };
    case UPDATE_CART:
      const newDataCartItem = [...state.cart];
      let filterCart = newDataCartItem.filter(
        (e) => e.id === action.payload.id
      );
      let key = newDataCartItem.indexOf(...filterCart);
      newDataCartItem[key].quantity =
        newDataCartItem[key].quantity + Number(action.payload.quantityNumber);
      let totalQuantity = 0;
      let totalPrice = 0;
      newDataCartItem.forEach((e) => {
        totalPrice += e.quantity * e.price;
        totalQuantity += e.quantity;
      });
      return {
        cart: newDataCartItem,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
      };

    case HANDLE_CART:
      const newDataHanleCart = [...state.cart];
      let filterHandleCart = newDataHanleCart.filter(
        (e) => e.id === action.payload.id
      );
      let keyHandleCart = newDataHanleCart.indexOf(...filterHandleCart);
      newDataHanleCart[keyHandleCart].quantity = Number(
        action.payload.quantityNumber
      );
      let totalQuantityHanleCart = 0;
      let totalPriceHanleCart = 0;
      newDataHanleCart.forEach((e) => {
        totalPriceHanleCart += e.quantity * e.price;
        totalQuantityHanleCart += e.quantity;
      });
      return {
        cart: newDataHanleCart,
        totalQuantity: totalQuantityHanleCart,
        totalPrice: totalPriceHanleCart,
      };
    default:
      return state;
  }
};
