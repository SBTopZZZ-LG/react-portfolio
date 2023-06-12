import React from "react";

import Card from "../Components/Card";

import data from "../Assets/Datasets/worksPage.json";

const Tile = ({
	dateRange = ["Jan 1970", "Jun 1970"],
	title = "Project",
	skills = ["Skill 1", "Skill 2"],
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
			}}>{`${dateRange[0]}${dateRange.length > 1 ? ` - ${dateRange[1]}` : ""}`}</span>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "22px",
			}}>{title}</span>

			{skills.length > 0 && <span style={{
				color: "#858585",
				fontWeight: "500",
				fontSize: "15px",
				marginTop: "13px",
			}}>Skills: {skills.join(", ")}</span>}
		</div>
	);
};

const Works = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				display: "grid",
				gap: "24px",
				width: "1076px",
				margin: "0px 24px",
			}}>
				<span style={{
					fontSize: "45px",
					fontWeight: "600",
					marginBottom: "16px",
					width: "auto",
					textAlign: "right",
				}}>
					<span style={{ fontWeight: "900" }}>/</span> WORKS
				</span>

				{data.projects.map(data => (
					<Card key={data.title} hoverable={true} style={{ width: "auto" }}>
						<Tile
							dateRange={data.date}
							title={data.title}
							skills={data.skills}
						/>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Works;
