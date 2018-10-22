import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  GET_CATEGORY
} from "./types";

const initState = [];

const CategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return action.payload;
  }

  return state;
};

export default CategoryReducer;
