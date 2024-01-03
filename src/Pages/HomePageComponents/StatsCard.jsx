import React from "react";

import Card from "../../Components/Card";

import { numPadding } from "../../Utils/padding";

import HomePageDataset from "../../Assets/Datasets/homePage.json";
import AboutMeDataset from "../../Assets/Datasets/aboutMePage.json";
import WorksDataset from "../../Assets/Datasets/worksPage.json";

const StatsCard = ({
	noObserverFadeIn = false,
	style = {},
	column = false,
}) => {
	return (
		<Card
			hoverable={true}
			width="auto"
			height="auto"
			noObserverFadeIn={noObserverFadeIn}
			style={{
				display: "flex",
				padding: "10px",
				...(column ? { flexDirection: "column" } : {}),
				...style,
			}}
		>
			{/* Years Of Experience */}
			<Card
				height="auto"
				hoverAnimation={false}
				noObserverFadeIn={true}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
					...(column ? { width: "auto" } : {}),
				}}
			>
				<span
					className="svg"
					style={{
						flexBasis: "0",
						flexGrow: "1",
						fontSize: "40px",
						fontWeight: "600",
					}}
				>
					{numPadding(parseInt(HomePageDataset.experienceInYears, 10), 2)}
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "block",
						flexBasis: "0",
						flexGrow: "1",
						lineHeight: "1em",
						maxHeight: "2em",
						color: "#858585",
						fontWeight: "600",
					}}
				>
					Years Of Experience
				</span>
			</Card>

			{/* Total Projects */}
			<Card
				height="auto"
				hoverAnimation={false}
				noObserverFadeIn={true}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
					...(column ? { width: "auto" } : {}),
				}}
			>
				<span
					className="svg"
					style={{
						flexBasis: "0",
						flexGrow: "1",
						fontSize: "40px",
						fontWeight: "600"
					}}
				>
					{numPadding(WorksDataset.projects.length, 2)}
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "flex",
						flexBasis: "0",
						flexGrow: "1",
						lineHeight: "1em",
						maxHeight: "2em",
						color: "#858585",
						fontWeight: "600",
					}}
				>
					Total Projects
				</span>
			</Card>

			{/* Certifications */}
			<Card
				height="auto"
				hoverAnimation={false}
				noObserverFadeIn={true}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
					...(column ? { width: "auto" } : {}),
				}}
			>
				<span
					className="svg"
					style={{
						flexBasis: "0",
						flexGrow: "1",
						fontSize: "40px",
						fontWeight: "600",
					}}
				>
					{numPadding(AboutMeDataset.certifications.length, 2)}
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "flex",
						flexBasis: "0",
						flexGrow: "1",
						lineHeight: "1em",
						maxHeight: "2em",
						color: "#858585",
						fontWeight: "600",
					}}
				>
					Certifications
				</span>
			</Card>
		</Card>
	);
};

export default StatsCard;
