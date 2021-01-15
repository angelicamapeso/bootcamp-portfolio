import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/portfolio">
            <h1>Portfolio</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/portfolio/:name">
            <h1>Portfolio Project</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
