import React from "react";
import { useParams } from "react-router-dom";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
	container: {},
	h3: {
		fontWeight: "400",
		fontSize: "24px",
		margin: "0px",
	},
	p: {
		fontWeight: "300",
		fontSize: "16px",
	},
});

const Model = () => {
	const { model } = useParams();
	return (
		<div className={css(styles.container)}>
			<h3 className={css(styles.h3)}>{model}</h3>
			<p className={css(styles.p)}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!
			</p>
		</div>
	);
};

export default Model;
