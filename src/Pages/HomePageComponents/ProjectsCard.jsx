import React from "react";

import Card from "../../Components/Card";

import Illustration from "../../Assets/Images/Projects.svg";

const ProjectsCard = ({
	style = {},
}) => {
	return (
		<Card
			width="auto"
			height="auto"
			style={{
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
				...style,
			}}
		>
			<center style={{
				width: "100%",
			}}>
				<img
					className="prevent-select"
					src={Illustration}
					alt="Projects"
					width="100px"
					height="100px"
				/>
			</center>

			<span className="svg" style={{ fontSize: "20px" }}>
				Projects
			</span>
		</Card>
	);
};

export default ProjectsCard;
