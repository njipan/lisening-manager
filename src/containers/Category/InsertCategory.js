import React, { Component } from "react";
import { connect } from "react-redux";

export class InsertCategory extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
    this.props.addCategory(this.state.name);
  };
}

const actionDispatch = dispatch => {
  return {
    addCategory: name =>
      dispatch({
        type: "ADD_CATEGORY",
        payload: { name: name }
      })
  };
};

export default connect(
  null,
  actionDispatch
)(InsertCategory);
