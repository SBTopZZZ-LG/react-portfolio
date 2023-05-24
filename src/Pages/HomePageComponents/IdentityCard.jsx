import React from "react";

import Card, { Padding } from "../../Components/Card";
import { HGap, VGap } from "../../Components/Gap";
import Avatar from "../../Assets/Images/picture.png";

const IdentityCard = () => {
	return (
		<Card
			width={474 - Padding * 2}
			height={238 - Padding * 2}
		>
			<img src={Avatar} alt="Avatar" />
			<HGap gap={35} />

			<div>
				<VGap gap={16} />
				<span className="white" style={{ color: "#858585" }}>A Full Stack Developer</span>
				<VGap gap={3} />

				<span className="white" style={{ fontSize: "31px" }}>
					Saumitra
					<br />
					Topinkatti.
				</span>
			</div>
		</Card>
	);
};

export default IdentityCard;
