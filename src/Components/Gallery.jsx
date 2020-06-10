import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Gallery = () => {
	const [gallery, setGallery] = useState([]);
	const location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
		const searchParams = new URLSearchParams(location.search);
		const print = Number(searchParams.getAll("print")[0] || 5);
		setGallery(
			new Array(print).fill("https://placem.at/things?w=100&h=100&random=")
		);
	}, [location, setGallery]);

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
