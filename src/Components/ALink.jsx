import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { css } from "aphrodite/no-important";

const ALink = ({ label, to, styles }) => {
	const match = useRouteMatch({ path: to, extact: true });

	return (
		<Link to={to} className={css(styles.a, match && styles.active)}>
			{label}
		</Link>
	);
};

export default ALink;
