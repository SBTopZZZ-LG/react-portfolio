import React from "react";

import Card from "../../Components/Card";

import data from "../../Assets/Datasets/aboutMePage.json";

import "./TopCertificationsCard.scss";

const Tile = ({
	certificate_code = "code",
	title = "Course",
	organization = "Org",
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
				fontSize: "10px",
			}}>{certificate_code}</span>

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

const TopCertificationsCard = ({ style = {} }) => {
	return (
		<Card
			height="auto"
			hoverable={true}
			style={{
				flexDirection: "column",
				padding: "22px 30px",
				...style,
			}}
		>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				justifyContent: "space-evenly",
				width: "100%",
			}}>
				<div style={{
					alignItems: "center",
					display: "flex",
					justifyContent: "space-between",
				}}>
					<span className="white" style={{
						fontWeight: "600",
						fontSize: "15px",
					}}>TOP CERTIFICATIONS</span>
				</div>

				{data.certifications.map(data => (
					<Tile
						key={data.code}
						certificate_code={data.code}
						title={data.title}
						organization={data.organization}
					/>
				))}
			</div>
		</Card>
	);
};

export default TopCertificationsCard;
