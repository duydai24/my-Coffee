import * as types from "../types";

export const initialState = {
  categoryId: [
    {
      id: 0,
      name: "All Products",
    },
    {
      id: 1,
      name: "Coffee Mugs",
    },
    {
      id: 2,
      name: "Others",
    },
    {
      id: 3,
      name: "Premium",
    },
    {
      id: 4,
      name: "Tea Mugs",
    },
  ],
};
export const categoryReduce = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        categoryId: action.payload.category,
      };
    default:
      return state;
  }
};
