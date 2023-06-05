import React from "react";

import Card from "../../Components/Card";

import "./TopCertificationsCard.css";

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

				<Tile
					certificate_code="UC-bc1fdc96-308e-4abe-a9b3-17b307315f7c"
					title="Flutter & Dart"
					organization="Academind"
				/>

				<Tile
					certificate_code="UC-02959054-5730-47e5-bfb9-6aeee10a601d"
					title="Complete Node.js Developer"
					organization="Udemy"
				/>

				<Tile
					certificate_code="UC-8b940003-b1dd-44bf-a387-64af9c56eac2"
					title="Data Structures + Algorithms"
					organization="Zero To Mastery Academy"
				/>
			</div>
		</Card>
	);
};

export default TopCertificationsCard;
