const initState = [{ name: "IBT" }, { name: "TOEFL" }, { name: "TPKS" }];
const CategoryReducer = (state = initState, action) => {
  if (action.type === "ADD_CATEGORY") {
    return [...state, action.payload];
  }

  return state;
};

export default CategoryReducer;
