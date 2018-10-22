import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes/main";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./stores";
import { Provider } from "react-redux";

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
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
