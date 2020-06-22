import React from "react";
import { useParams } from "react-router-dom";
const ClothesStyle = () => {
	const { type, style } = useParams();

	return (
		<h2>
			{type} - {style}
		</h2>
	);
};

export default ClothesStyle;
