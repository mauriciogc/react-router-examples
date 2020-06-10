import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
	const history = useHistory();

	const handleAbout = () => history.push("/about"); //add programmatic routing
	const handleBack = () => history.goBack(); //Back programmatic routing
	const handleForward = () => history.goForward(); //Forward programmatic routing

	return (
		<div>
			<h1>Hello, I'm Home component </h1>
			<hr />
			<h2>useHistory</h2>
			<button onClick={handleAbout}>About</button>
			<button onClick={handleBack}>Back</button>
			<button onClick={handleForward}>Forward</button>
			<hr />
		</div>
	);
};

export default Home;
