import React from "react";
import { Header, Footer } from "../../layouts";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/dashboard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                  key={index}
                />
              );
            })}
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
