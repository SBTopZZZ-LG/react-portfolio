import React from "react";

import Card from "../../Components/Card";

const StatsCard = () => {
	return (
		<Card
			width="auto"
			height="auto"
			style={{
				padding: "10px",
			}}
		>
			{/* Years Of Experience */}
			<Card
				height="auto"
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
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
					02
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "flex",
						flexBasis: "0",
						flexGrow: "1",
						color: "#858585",
					}}
				>
					Years Of Experience
				</span>
			</Card>

			{/* Total Projects */}
			<Card
				height="auto"
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
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
					09
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "flex",
						flexBasis: "0",
						flexGrow: "1",
						color: "#858585",
						marginBottom: "11.5px",
					}}
				>
					Total Projects
				</span>
			</Card>

			{/* Certifications */}
			<Card
				height="auto"
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					justifyContent: "space-between",
					margin: "4.065px",
					padding: "30px 23.935px",
					textAlign: "center",
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
					04
				</span>

				<span
					className="svg"
					style={{
						alignItems: "end",
						display: "flex",
						flexBasis: "0",
						flexGrow: "1",
						color: "#858585",
						marginBottom: "11.5px",
					}}
				>
					Certifications
				</span>
			</Card>
		</Card>
	);
};

export default StatsCard;
