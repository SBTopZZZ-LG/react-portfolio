import React from "react";

import Card, { Padding } from "../../Components/Card";
import { VGap } from "../../Components/Gap";

import Signature from "../../Assets/Images/signature.png";

const AboutMeCard = () => {
	return (
		<Card
			width={238 - Padding * 2}
			height={238 - Padding * 2}
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
				<img src={Signature} alt="Signature" width="148px" height="82px" />
			</center>
			<VGap gap={28} />

			<span style={{ color: "#858585" }}>
				More About Me
			</span>
			<VGap gap={5} />
			<span style={{ fontSize: "20px" }}>
				Credentials
			</span>
		</Card>
	);
};

export default AboutMeCard;
