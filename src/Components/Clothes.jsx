import React from "react";
import {
	useParams,
	useRouteMatch,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import ClothesStyle from "./ClothesStyle";

const Clothes = () => {
	const { type } = useParams();
	const { path, url } = useRouteMatch();

	return (
		<div>
			<h1>{type}</h1>
			<ul>
				<li>
					<Link to={`${url}/Outerwear`}>Outerwear</Link>
				</li>
				<li>
					<Link to={`${url}/T-shirts`}>T-shirts</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>Please select a style.</h3>
				</Route>
				<Route path={`${path}/:style`}>
					<ClothesStyle />
				</Route>
			</Switch>
		</div>
	);
};

export default Clothes;
