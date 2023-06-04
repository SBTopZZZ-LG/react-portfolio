import React from "react";

import Card from "../../Components/Card";
import { VMGap } from "../../Components/Gap";

import Signature from "../../Assets/Images/signature.svg";

const AboutMeCard = ({
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			width="auto"
			height="auto"
			style={{
				cursor: "pointer",
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
				...style,
			}}
			onClick={() => window.location.href = "/credentials"}
		>
			<VMGap
				gap={16}
				style={{
					width: "100%",
				}}
			>
				<center>
					<img
						className="svg prevent-select"
						src={Signature}
						alt="Signature"
						width="148px"
						height="82px"
					/>
				</center>
			</VMGap>

			<VMGap gap={28}>
				<span className="white" style={{ color: "#858585" }}>
					More About Me
				</span>
			</VMGap>
			<VMGap gap={5}>
				<span className="white" style={{ fontSize: "20px" }}>
					Credentials
				</span>
			</VMGap>
		</Card>
	);
};

export default AboutMeCard;
