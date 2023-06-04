import React from "react";

import Card from "../Components/Card";

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

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["February", "March 2023"]}
						title="Aura 23 Website"
						skills={[
							"React",
							"Node.js",
							"MongoDB",
							"Micro-services",
							"JavaScript",
							"REST API"
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["November 2022", "February 2023"]}
						title="CodeCollab"
						skills={[
							"Java",
							"Socket Programming",
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["October", "November 2022"]}
						title="Flutter package: render_box_exposed"
						skills={[
							"Flutter",
							"Dart",
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["September 2022"]}
						title="Archivit"
						skills={[
							"Java",
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["February 2022"]}
						title="Blog.io"
						skills={[
							"HTML5",
							"CSS",
							"Node.js",
							"MongoDB",
							"JavaScript",
							"REST API"
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["January 2022"]}
						title="Email Scheduler v2"
						skills={[
							"Java",
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["June", "July 2021"]}
						title="ClipIt"
						skills={[
							"Flutter",
							"Node.js",
							"MongoDB",
							"Dart",
							"JavaScript",
							"REST API"
						]}
					/>
				</Card>

				<Card hoverable={true} style={{ width: "auto" }}>
					<Tile
						dateRange={["May", "June 2021"]}
						title="SpeedPost"
						skills={[
							"Android",
							"Java",
							"Node.js",
							"MongoDB",
							"JavaScript",
							"REST API"
						]}
					/>
				</Card>
			</div>
		</div>
	);
};

export default Works;
