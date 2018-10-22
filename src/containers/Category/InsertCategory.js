import React, { Component } from "react";

export default class InsertCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <form className="container">
        <div className="pageHeader">New Category</div>
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="input full"
              placeholder="Category Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn full"
              onClick={this.handleSubmit}
            >
              <i className="fa fa-save" /> Save
            </button>
          </div>
        </div>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = () => {
    this.props.onInsert({ category_name: this.state.name });
  };
}
