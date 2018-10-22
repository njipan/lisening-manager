import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  GET_CATEGORY
} from "./types";

import axios from "axios";

const uri = "http://bcd.na:5858/categories";

export const fetchAllCategories = () => {
  return dispatch => {
    return axios.get(uri).then(response => {
      if (response.data === null) return;
      dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: response.data });
    });
  };
};

export const addCategory = category => {
  return dispatch => {
    return axios.post(uri, category).then(response => {
      if (response.status === "error") return;
      dispatch(fetchAllCategories());
    });
  };
};
