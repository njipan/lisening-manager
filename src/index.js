import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes/main";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route path={route.path} component={route.component} key={index} />
          );
        })}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
