import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import ALink from "./ALink";

const BRANDS = ["Mercedes", "Ferrari", "Porsche", "Lamborghini"];
const styles = StyleSheet.create({
	ul: {
		listStyle: "none",
		padding: "0",
		width: "100%",
		height: "60px",
		margin: "auto",
		position: "relative",
		backgroundColor: "#2c3e50",
	},
	li: {
		display: "inline-block",
		width: "25%",
		height: "100%",
		margin: "0",
		padding: "0",
	},
	a: {
		display: "flex",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		textDecoration: "none",
		position: "relative",
		fontSize: "18px",
		transition: "left .4s, background-color .4s",
		":hover": {
			backgroundColor: "#3498db",
		},
	},
	active: {
		backgroundColor: "#e74c3c",
	},
});

const Menu = () => {
	return (
		<div>
			<ul className={css(styles.ul)}>
				{BRANDS.map((brand) => (
					<li className={css(styles.li)} key={brand}>
						<ALink label={brand} to={`/${brand}`} styles={styles} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
