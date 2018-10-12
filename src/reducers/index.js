import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";

const reducers = combineReducers({
  categories: CategoryReducer
});

export default reducers;
