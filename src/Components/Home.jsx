import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
	const history = useHistory();

	const handleAbout = () => history.push("/about"); //add programmatic routing
	const handleGallery = () => history.push("/gallery/20"); //add programmatic routing
	const handleBack = () => history.goBack(); //Back programmatic routing
	const handleForward = () => history.goForward(); //Forward programmatic routing

	return (
		<div>
			<h1>Hello, I'm Home component </h1>
			<hr />
			<h2>useHistory</h2>
			<button onClick={handleAbout}>Go to "About"</button>
			<button onClick={handleBack}>Back</button>
			<button onClick={handleForward}>Forward</button>
			<button onClick={handleGallery}>
				Go to "Gallery" with params "/gallery/20"
			</button>
			<hr />
		</div>
	);
};

export default Home;
