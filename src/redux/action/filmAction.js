import * as types from "../types";
export const getFilm = (film) => async (dispatch) => {
  dispatch({
    type: types.GET_FILM,
    payload: {
      film,
    },
  });
};
