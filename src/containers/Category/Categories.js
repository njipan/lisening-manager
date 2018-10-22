import React, { Component } from "react";

import CategoryItem from "./CategoryItem";
import Pagination from "../../components/Pagination";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div className="container">
        <div className="pageHeader">Manage Categories</div>
        <div className="row">
          <div className="col-sm-2">
            <input
              type="text"
              className="input full"
              placeholder="Search category .."
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped table-hovered">
              <thead>
                <tr>
                  <th className="col-sm-10">Category Name</th>
                  <th className="col-sm-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.categories.map((category, i) => (
                  <CategoryItem key={i} category={category} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-sm-12">
            <Pagination
              pageTotal={5}
              onPaginate={this.props.onPaginate}
              query={{ search: this.state.search }}
            />
          </div>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };
}
