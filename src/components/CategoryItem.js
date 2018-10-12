import React, { Component } from "react";

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.category.name}</td>
        <td>Edit Delete</td>
      </tr>
    );
  }
}
