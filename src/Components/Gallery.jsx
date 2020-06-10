import React from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
	const params = useParams();
	const gallery = Array(Number(params.print)).fill(
		"https://placem.at/things?w=100&h=100&random="
	);

	return (
		<div>
			<h1>Hello, I'm Gallery component</h1>
			<div>
				{gallery.map((v, i) => (
					<img src={v + i} alt={v + i} key={i} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
