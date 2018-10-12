import Audio from "../components/Audio";
import NotFound from "./NotFound";
import { Subject, Category } from "../containers";

const dashboard = [
  { path: "/audios", component: Audio },
  { path: "/categories", component: Category },
  { path: "/subjects", component: Subject },
  { path: "/", component: Audio, exact: true },
  { path: `*`, component: NotFound, exact: true }
];

export default dashboard;
