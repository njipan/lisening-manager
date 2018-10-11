import Dashboard from "../pages/dashboard";
import Error404 from "../pages/errors/Error404";

const routes = [
  { path: "/404", component: Error404, exact: true },
  { path: "/", component: Dashboard, exact: false }
];

export default routes;
