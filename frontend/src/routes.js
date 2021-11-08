import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Categories from "./Routes/Categories";
const routes = (
  <Router>
    <Routes>
      <Route path="/" component={App} />
      <Route path="/Categories" component={Categories}></Route>
    </Routes>
  </Router>
);
export default routes;
