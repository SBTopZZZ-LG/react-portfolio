import React from "react";

import Card, { Padding } from "../../Components/Card";

import Illustration from "../../Assets/Images/Projects.svg";

const ProjectsCard = () => {
	return (
		<Card
			width={238 - Padding * 2}
			height={191 - Padding * 2}
			style={{
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
			}}
		>
			<center style={{
				width: "100%",
			}}>
				<img
					src={Illustration}
					alt="Projects"
					width="100px"
					height="100px"
				/>
			</center>

			<span style={{
				fontSize: "20px",
			}}>
				Projects
			</span>
		</Card>
	);
};

export default ProjectsCard;
