import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "../../components/CategoryItem";

export class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="pageHeader">Manage Categories</div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped table-hovered">
              <thead>
                <tr>
                  <th className="col-sm-8">Category Name</th>
                  <th className="col-sm-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.categories.map((category, i) => (
                  <CategoryItem key={i} category={category} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapToState = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapToState)(Categories);
