import React from "react";
import Audio from "../components/Audio";
import Category from "../components/Category";
import Dashboard from "../pages/dashboard";
import { Redirect } from "react-router-dom";

const dashboard = [
  { path: "/audios", component: Audio, exact: true },
  { path: "/categories", component: Category, exact: true },
  { path: "/", component: Dashboard, exact: true },
  { path: "*", render: () => <Redirect to="/404" />, exact: false }
];

export default dashboard;
