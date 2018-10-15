import React, { Component } from "react";

export default class InsertAudio extends Component {
  state = {
    categoriesSelected: [],
    categoryName: ""
  };

  render() {
    return (
      <form className="container">
        <div className="pageHeader">New Audio</div>
        <div className="row">
          <span>{this.state.categoryName}</span>
          <div className="col-sm-12">
            {this.state.categoriesSelected.map(category => (
              <button type="button" className="btn btn-primary btn-xs mr-10">
                <span
                  className="glyphicon glyphicon-pushpin"
                  aria-hidden="true"
                />{" "}
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: "10px" }} />
        <div className="row">
          <div className="col-sm-2">
            <select
              className="input"
              onChange={this._handleCategory}
              value={this.state.categoryName}
            >
              <option value={0}>Choose Category</option>
              <option value="IBT">IBT</option>
              <option value="TPKS">TPKS</option>
              <option value="EF">EF</option>
            </select>
          </div>
          <div className="col-sm-1">
            <button
              type="button"
              className="btn full"
              onClick={this.handleAddCategory}
            >
              <span className="glyphicon glyphicon-pushpin" />
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }} />
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="input full"
              placeholder="Audio Name"
            />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn full">
              <i className="fa fa-save" /> Save
            </button>
          </div>
        </div>
      </form>
    );
  }

  handleAddCategory = () => {
    this.setState({
      categoriesSelected: [
        ...this.state.categoriesSelected,
        { name: this.state.categoryName }
      ]
    });
  };

  _handleCategory = e => {
    this.setState({
      categoryName: e.target.value
    });
  };

  handleChange = event => {};
}
