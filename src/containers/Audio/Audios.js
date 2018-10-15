import React, { Component } from "react";

export default class Audios extends Component {
  render() {
    return (
      <div className="container">
        <div className="pageHeader">Manage Categories</div>
        <div className="row">
          <div className="col-sm-2">
            <input
              type="text"
              className="input full"
              placeholder="Search audio .."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped table-hovered">
              <thead>
                <tr>
                  <th className="col-sm-6">Audio Name</th>
                  <th className="col-sm-4">Category</th>
                  <th className="col-sm-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.props.categories.map((category, i) => (
                  <CategoryItem key={i} category={category} />
                ))} */}
              </tbody>
            </table>
          </div>
          <div className="col-sm-12">
            {/* <Pagination
              pageTotal={5}
              onPaginate={this.props.onPaginate}
              query={{ search: this.state.search }}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
