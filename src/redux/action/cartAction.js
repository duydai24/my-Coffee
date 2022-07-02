import { ADD_CART, DELETE_CART, UPDATE_CART, HANDLE_CART } from "../types";

export const addCart = (new_cart) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: new_cart,
  });
};
export const deleteCart = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CART,
    payload: id,
  });
};
export const updateCart = (id, quantityNumber) => async (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: {
      id,
      quantityNumber,
    },
  });
};
export const handleCart = (id, quantityNumber) => async (dispatch) => {
  dispatch({
    type: HANDLE_CART,
    payload: {
      id,
      quantityNumber,
    },
  });
};
