import { AllSubject, InsertSubject } from "../components/subjects";
import NotFound from "./NotFound";

const prefix = "subjects";
const routes = [
  { path: `/${prefix}/new`, component: InsertSubject },
  { path: `/${prefix}`, component: AllSubject, exact: true },
  { path: `/${prefix}/*`, component: NotFound, exact: true }
];

export default routes;
