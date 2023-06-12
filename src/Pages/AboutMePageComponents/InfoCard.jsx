import React from "react";

import Card from "../../Components/Card";
import { HGap } from "../../Components/Gap";

import data from "../../Assets/Datasets/aboutMePage.json";

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

			<span style={{ color: "#858585" }}>{data.infoCard.headline}</span>

			<span style={{ color: "#858585", marginTop: "30px" }}>
				{data.infoCard.bio}
			</span>
		</Card>
	);
};

export default InfoCard;
