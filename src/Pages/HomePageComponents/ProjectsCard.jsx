import React from "react";

import Card from "../../Components/Card";

import Illustration from "../../Assets/Images/Projects.svg";

const ProjectsCard = ({
	noObserverFadeIn = false,
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			width="auto"
			height="auto"
			noObserverFadeIn={noObserverFadeIn}
			style={{
				cursor: "pointer",
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
				...style,
			}}
			onClick={() => window.location.href = "/works"}
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
