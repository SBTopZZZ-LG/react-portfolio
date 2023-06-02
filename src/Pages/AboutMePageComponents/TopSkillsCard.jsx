import React from "react";

import Card from "../../Components/Card";

import "./TopSkillsCard.css";

const Tile = ({
	title = "Tech",
	strength = "69",
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
			}}>{strength} %</span>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "18px",
			}}>{title}</span>
		</div>
	);
};

const TopSkillsCard = ({ style = {} }) => {
	return (
		<Card
			hoverable={true}
			height="auto"
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
				}}>TOP SKILLS</span>

				<span className="view-all" style={{
					fontWeight: "700",
					fontSize: "15px",
				}}>View All</span>
			</div>

			<div style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gridTemplateRows: "1fr 1fr 1fr",
				columnGap: "68px",
				rowGap: "35px",
			}}>
				<Tile title="Flutter" strength="90" />
				<Tile title="React" strength="78" />
				<Tile title="Node.js" strength="97" />
				<Tile title="Figma" strength="85" />
				<Tile title="JavaScript" strength="94" />
				<Tile title="Java" strength="94" />
			</div>
		</Card>
	);
};

export default TopSkillsCard;
