import React from "react";

import Card from "../../Components/Card";

import "./EducationCard.css";

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
					fontWeight: "bold",
					fontSize: "15px",
				}}>EDUCATION</span>

				<a
					href="/credentials#education"
					style={{ all: "unset", cursor: "pointer" }}
				>
					<span className="view-all" style={{
						fontWeight: "700",
						fontSize: "15px",
					}}>View All</span>
				</a>
			</div>

			<Tile
				dateRange={["2020", "2024"]}
				title="Bachelor Degree in Computer Science"
				company="KLS Gogte Institute of Technology, Belagavi"
			/>

			<Tile
				dateRange={["2018", "2020"]}
				title="Pre-University"
				company="SKE Govindram Seksaria Science College, Belagavi"
			/>
		</Card>
	);
};

export default EducationCard;
