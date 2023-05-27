import React from "react";

import Card from "../../Components/Card";
import { VGap } from "../../Components/Gap";

import Signature from "../../Assets/Images/signature.svg";

const AboutMeCard = () => {
	return (
		<Card
			width="auto"
			height="auto"
			style={{
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
			}}
		>
			<VGap gap={16} />
			<center style={{
				width: "100%",
			}}>
				<img
					className="svg"
					src={Signature}
					alt="Signature"
					width="148px"
					height="82px"
					style={{
						fill: "red",
					}}
				/>
			</center>
			<VGap gap={28} />

			<span className="white" style={{ color: "#858585" }}>
				More About Me
			</span>
			<VGap gap={5} />
			<span className="white" style={{ fontSize: "20px" }}>
				Credentials
			</span>
		</Card>
	);
};

export default AboutMeCard;
