import React from "react";
import { useParams } from "react-router-dom";

const Clothes = () => {
	const { type } = useParams();
	return <div>Type: {type}</div>;
};

export default Clothes;
