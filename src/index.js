import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./components/Routes";
import routes from "./routes/main";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Routes routes={routes} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
