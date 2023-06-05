import React from "react";

import Card from "../../Components/Card";

const Tile = ({
	dateRange = ["Jan 1970", "Jun 1970"],
	title = "Job",
	company = "Company",
}) => {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			gap: "5px",
			justifyContent: "space-around",
		}}>
			<span style={{
				color: "#858585",
				fontWeight: "500",
				fontSize: "15px",
			}}>{dateRange[0]} - {dateRange[1]}</span>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "18px",
			}}>{title}</span>

			<span style={{
				color: "#858585",
				fontWeight: "500",
				fontSize: "15px",
			}}>{company}</span>
		</div>
	);
};

const ExperienceCard = ({ style = {} }) => {
	return (
		<Card
			hoverable={true}
			style={{
				flexDirection: "column",
				gap: "20px",
				justifyContent: "space-evenly",
				padding: "22px 30px",
				...style,
			}}
		>
			<span className="white" style={{
				fontWeight: "600",
				fontSize: "15px",
			}}>EXPERIENCE</span>

			<Tile
				dateRange={["March 2023", "Present"]}
				title="Flutter Development Intern"
				company="Tharasis (Part-time)"
			/>

			<Tile
				dateRange={["March", "June 2022"]}
				title="Node.js Development Intern"
				company="Forty4Hz"
			/>
		</Card>
	);
};

export default ExperienceCard;
