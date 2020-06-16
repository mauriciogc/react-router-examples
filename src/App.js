import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Brand from "./Components/Brand";
import Menu from "./Components/Menu";


function App() {
	return (
		<Fragment>
			<Router>
				<Menu/>
				<Switch>
          <Route path="/:brand">
            <Brand />
          </Route>
					<Route path="/">Please select brand...</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
