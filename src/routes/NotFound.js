import React from "react";
import { Redirect } from "react-router-dom";

const NotFound = () => {
  return <Redirect to="/404" />;
};

export default NotFound;
