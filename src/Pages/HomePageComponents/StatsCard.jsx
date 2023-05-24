import React from "react";

import Card from "../../Components/Card";
import { VGap } from "../../Components/Gap";

const StatsCard = () => {
	return (
		<Card
			width={474 - 10 * 2}
			height={191 - 10 * 2}
			style={{
				padding: "10px"
			}}
		>
			{/* Years Of Experience */}
			<Card
				height={161 - 17.935 * 2}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					margin: "4.065px",
					padding: "17.935px 23.935px",
					textAlign: "center",
				}}
			>
				<VGap gap={12} />
				<span
					className="svg"
					style={{
						fontSize: "40px",
						fontWeight: "600"
					}}
				>
					02
				</span>
				<VGap gap={26} />

				<span className="svg" style={{ color: "#858585" }}>
					Years Of Experience
				</span>
			</Card>

			{/* Total Projects */}
			<Card
				height={161 - 17.935 * 2}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					margin: "4.065px",
					padding: "17.935px 23.935px",
					textAlign: "center",
				}}
			>
				<VGap gap={12} />
				<span
					className="svg"
					style={{
						fontSize: "40px",
						fontWeight: "600"
					}}
				>
					09
				</span>
				<VGap gap={26} />

				<span className="svg" style={{ color: "#858585" }}>
					Total Projects
				</span>
			</Card>

			{/* Certifications */}
			<Card
				height={161 - 17.935 * 2}
				style={{
					alignItems: "center",
					flexBasis: "0",
					flexDirection: "column",
					flexGrow: "1",
					margin: "4.065px",
					padding: "17.935px 23.935px",
					textAlign: "center",
				}}
			>
				<VGap gap={12} />
				<span
					className="svg"
					style={{
						fontSize: "40px",
						fontWeight: "600"
					}}
				>
					04
				</span>
				<VGap gap={34} />

				<span className="svg" style={{ color: "#858585" }}>
					Certifications
				</span>
			</Card>
		</Card>
	);
};

export default StatsCard;
