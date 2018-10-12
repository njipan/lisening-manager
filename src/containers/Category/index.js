import React from "react";
import InsertCategory from "./InsertCategory";
import Categories from "./Categories";

export default class Category extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InsertCategory />
        <Categories />
      </React.Fragment>
    );
  }
}
