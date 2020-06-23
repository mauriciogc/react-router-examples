import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Clothes from "./Components/Clothes";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Mens">Men's</Link>
            </li>
            <li>
              <Link to="/Ladies">Ladies</Link>
            </li>
            <li>
              <Link to="/Other">Other</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/error">
            <NotFound />
          </Route>
          <Route path="/:type">
            <Clothes />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
