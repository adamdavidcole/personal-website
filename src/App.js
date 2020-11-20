import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Home from "./components/home";
import PageLoader from "./components/page-loader";

import "./App.css";

function App() {
  smoothscroll.polyfill();

  return (
    <Router>
      {/* <PageLoader /> */}
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route
          path={[
            "/projects/:projectId",
            "/projects",
            "/:projectsFilter/:projectId",
            "/:projectsFilter",
            "/",
          ]}
        >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
