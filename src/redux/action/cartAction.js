import * as types from "../types";
export const addCart =
  (cart, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.ADD_CART,
      payload: {
        cart,
        totalQuantity,
        totalPrice,
      },
    });
  };
export const deleteCart =
  (cart, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.DELETE_CART,
      payload: {
        cart,
        totalQuantity,
        totalPrice,
      },
    });
  };
export const updateCart =
  (cart, totalQuantity, totalPrice) => async (dispatch) => {
    dispatch({
      type: types.UPDATE_CART,
      payload: {
        cart,
        totalQuantity,
        totalPrice,
      },
    });
  };
