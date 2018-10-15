import React, { Component } from "react";

export default class AudioItem extends Component {
  render() {
    return (
      <tr>
        {/* <td>{this.props.category.name}</td> */}
        <td>
          <button type="button" className="btn btn-xs btn-primary mr-10">
            <span
              className="glyphicon glyphicon glyphicon-edit"
              aria-hidden="true"
            />
          </button>
          <button type="button" className="btn btn-xs btn-danger">
            <span className="glyphicon glyphicon-remove" />
          </button>
        </td>
      </tr>
    );
  }
}
