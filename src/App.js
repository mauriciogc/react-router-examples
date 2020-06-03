import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Main page</Link> | 
        <Link to="/page1">Page 1</Link> | 
        <Link to="/page2">Page 2</Link>
      </div>

      <Switch>
        <Route path="/page2">
          <h1>I'm Page 2</h1>
        </Route>
        <Route path="/page1">
          <h1>I'm Page 1</h1>
        </Route>
        <Route path="/">
          <h1>I'm Main page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
