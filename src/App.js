import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clothes from "./Components/Clothes";

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
          </ul>
        </div>

        <Switch>
          <Route path="/:type">
            <Clothes />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
