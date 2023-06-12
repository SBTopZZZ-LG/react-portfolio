import React from "react";

import Card from "../../Components/Card";

import data from "../../Assets/Datasets/aboutMePage.json";

import "./EducationCard.css";

const Tile = ({
	dateRange = ["Jan 1970", "Jun 1970"],
	title = "Job",
	organization = "Organization",
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
			}}>{organization}</span>
		</div>
	);
};

const EducationCard = ({ style = {} }) => {
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
				}}>EDUCATION</span>

				<a
					href="/credentials#education"
					style={{ all: "unset", cursor: "pointer" }}
				>
					<span className="view-all" style={{
						fontWeight: "600",
						fontSize: "15px",
					}}>View All</span>
				</a>
			</div>

			{data.educationCard.map(data => (
				<Tile
					key={data.date}
					dateRange={data.date}
					title={data.title}
					organization={data.organization}
				/>
			))}
		</Card>
	);
};

export default EducationCard;
