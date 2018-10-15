import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import PropsTypes from "prop-types";

class Pagination extends Component {
  static propTypes = {
    onPaginate: PropsTypes.func.isRequired,
    pageTotal: PropsTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  query = queryString.parse(this.props.location.search);

  render() {
    return (
      this.props.pageTotal > 1 && (
        <ul className="pagination">
          <li>
            <a onClick={e => this.goBack(e)}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {this.generate()}
          <li>
            <a onClick={e => this.goNext(e)}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      )
    );
  }

  generate() {
    let paginations = [];
    for (let i = 1; i <= this.props.pageTotal; i++)
      paginations.push(
        <li key={i}>
          <a onClick={e => this.goPaginate(e)}>{i}</a>
        </li>
      );
    return paginations;
  }

  goBack(e) {
    e.preventDefault();
    let curr = this.state.current;
    let min = 1;

    if (curr <= min) return;

    this.setState({
      current: curr - 1
    });
    //dispatch here
  }

  goNext(e) {
    e.preventDefault();
    let curr = this.state.current;
    let max = this.props.pageTotal;

    if (curr >= max) return;

    this.setState({
      current: curr + 1
    });
    //dispatch here
  }

  goPaginate(e) {
    e.preventDefault();
    let toPage = parseInt(e.target.innerText, 10);
    if (typeof toPage !== "number") return;
    this.setState({
      current: toPage
    });
    this.setState(Object.assign(this.props.query, ...this.state));
    //dispatch here
    //this.props.onPaginate({ page: toPage, search: search });
  }
}

export default withRouter(Pagination);
