import React from "react";
import { Header, Footer } from "../../layouts";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/dashboard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
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
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
