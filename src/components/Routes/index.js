import React from "react";
import { Route, Switch } from "react-router-dom";

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        {this.props.routes.map(item => (
          <Route
            path={item.path}
            exact={item.exact}
            component={item.component}
            render={item.render}
          />
        ))}
      </Switch>
    );
  }
}
