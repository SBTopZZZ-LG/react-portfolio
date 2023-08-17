import React from "react";

import Card from "../../Components/Card";

import data from "../../Assets/Datasets/aboutMePage.json";

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
			<div style={{
				alignItems: "center",
				display: "flex",
				justifyContent: "space-between",
			}}>
				<span className="white" style={{
					fontWeight: "600",
					fontSize: "15px",
				}}>EXPERIENCE</span>

				<a
					href="/credentials#experience"
					style={{ all: "unset", cursor: "pointer" }}
				>
					<span className="view-all" style={{
						fontWeight: "600",
						fontSize: "15px",
					}}>View All</span>
				</a>
			</div>

			{data.experienceCard.map(data => (
				<Tile
					key={data.date}
					dateRange={data.date}
					title={data.title}
					company={data.company}
				/>
			))}
		</Card>
	);
};

export default ExperienceCard;
