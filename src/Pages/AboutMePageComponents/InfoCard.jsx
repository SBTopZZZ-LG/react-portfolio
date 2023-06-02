import React from "react";

import Card from "../../Components/Card";
import { HGap } from "../../Components/Gap";

import "./InfoCard.css";

const InfoCard = ({
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			style={{
				color: "#858585",
				flexDirection: "column",
				fontSize: "15px",
				height: "auto",
				justifyContent: "center",
				padding: "47px 22px",
				...style,
			}}
		>
			<div style={{
				alignItems: "center",
				display: "flex",
				flexWrap: "nowrap",
			}}>
				<span className="name white">Saumitra Topinkatti</span>
				<HGap gap={10} />
				<span style={{ color: "#858585" }}>{"(He/Him)"}</span><br />
			</div>

			<span style={{ color: "#858585" }}>Software Development Intern @ Tharasis</span>

			<span style={{ color: "#858585", marginTop: "30px" }}>
				I am a dedicated full-stack developer proficient with React,
				Flutter, and Node.js. I am also a UI/UX designer for web and
				mobile apps. I am a 3rd year Computer Science student studying at KLS GIT.
			</span>
		</Card>
	);
};

export default InfoCard;
