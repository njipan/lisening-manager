import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes/subject";

class Subject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Dummy</th>
              <th>Dummy1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Panji Kurnia N</td>
              <td>COMP6048</td>
            </tr>
          </tbody>
        </table>
        <Switch>
          {routes.map(route => {
            return (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Subject;
