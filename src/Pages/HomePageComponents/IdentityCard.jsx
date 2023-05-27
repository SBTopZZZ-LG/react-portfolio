import React from "react";

import Card from "../../Components/Card";
import { HMGap, VMGap } from "../../Components/Gap";

import Avatar from "../../Assets/Images/picture.png";

const IdentityCard = ({
	style = {},
	column = false,
}) => {
	return (
		<Card
			width="auto"
			height="auto"
			style={{
				alignItems: "center",
				...(column ? {
					display: "flex",
					flexDirection: "column",
				} : {}),
				...style,
			}}
		>
			<img src={Avatar} alt="Avatar" width="auto" height="160vh" />

			<HMGap
				gap={column ? 0 : 35}
				style={{
					height: "100%",
				}}
			>
				<div>
					<VMGap gap={16}>
						<span className="white" style={{ color: "#858585" }}>A Full Stack Developer</span>
					</VMGap>

					<VMGap gap={3}>
						<span className="white" style={{ fontSize: "31px" }}>
							Saumitra
							<br />
							Topinkatti.
						</span>
					</VMGap>
				</div>
			</HMGap>
		</Card>
	);
};

export default IdentityCard;
