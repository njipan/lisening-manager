import React from "react";
import InsertCategory from "./InsertCategory";
import Categories from "./Categories";
import { connect } from "react-redux";
import { categoryActions } from "../../stores/categories";

export class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allCategory();
  }

  render() {
    return (
      <React.Fragment>
        <InsertCategory onInsert={this.props.addCategory} />
        <Categories categories={this.props.categories} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const dispatchActions = dispatch => {
  return {
    onPaginate: payload =>
      dispatch({
        type: "CATEGORY_ON_PAGINATE",
        payload: payload
      }),
    allCategory: () => dispatch(categoryActions.fetchAllCategories()),
    addCategory: category => dispatch(categoryActions.addCategory(category))
  };
};

export default connect(
  mapStateToProps,
  dispatchActions
)(Category);
