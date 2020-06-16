import React from "react";
import { useRouteMatch } from "react-router-dom";
const About = () => {
	const match = useRouteMatch("/about/:name");
	return (
		<div>
			<h1>Hello, I'm About component</h1>
			<h3>{match ? match.params.name : "Stranger"} profile</h3>
			<p>
				Bacon ipsum dolor amet chuck meatloaf doner shankle picanha. Ham hock
				pork belly capicola buffalo ground round tail. Turkey biltong spare
				ribs, alcatra short loin andouille swine meatloaf ham hock drumstick
				kevin frankfurter salami. Andouille tail pig brisket beef ribs.
			</p>
			<p>
				Ribeye fatback turkey pig. Chuck fatback ham, meatball hamburger alcatra
				doner. Filet mignon ham hock ham, salami ribeye pork spare ribs pig.
				Prosciutto meatball pig pork loin rump spare ribs, burgdoggen cupim
				flank alcatra.
			</p>
			<p>
				Tri-tip pastrami pork, ribeye corned beef swine pork loin. Shank pork
				loin boudin short ribs pork belly venison meatball shoulder swine ham
				hock chicken. Fatback landjaeger t-bone tri-tip flank pork pork loin
				leberkas. Fatback pork spare ribs brisket beef leberkas. Shoulder swine
				leberkas bacon bresaola filet mignon strip steak pork belly kielbasa
				t-bone. Fatback hamburger burgdoggen jerky landjaeger beef rump
				frankfurter flank prosciutto pork belly andouille chislic jowl.
			</p>
		</div>
	);
};

export default About;
