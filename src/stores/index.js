import { combineReducers } from "redux";
import CategoryReducer from "./categories/CategoryReducer";

const reducers = combineReducers({
  categories: CategoryReducer
});

export default reducers;
