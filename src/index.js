import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes/main";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routes.map(route => {
        return <Route path={route.path} component={route.component} />;
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
