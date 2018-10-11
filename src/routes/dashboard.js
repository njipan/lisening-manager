import React from "react";
import Audio from "../components/Audio";
import Category from "../components/Category";
import NotFound from "./NotFound";
import { SubjectContainer } from "../containers";

const dashboard = [
  { path: "/audios", component: Audio },
  { path: "/categories", component: Category },
  { path: "/subjects", component: SubjectContainer },
  { path: "/", component: Audio, exact: true },
  { path: `*`, component: NotFound, exact: true }
];

export default dashboard;
