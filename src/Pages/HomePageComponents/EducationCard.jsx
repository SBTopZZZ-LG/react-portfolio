import React from "react";
import {
	School,
} from "@material-ui/icons";

import Card from "../../Components/Card";
import { VGap } from "../../Components/Gap";

const EducationCard = ({
	noObserverFadeIn = true,
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			width="auto"
			height="auto"
			noObserverFadeIn={noObserverFadeIn}
			style={{
				cursor: "pointer",
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
				...style,
			}}
			onClick={() => window.location.href = "/credentials#education"}
		>
			<VGap gap={18} />
			<center style={{
				width: "100%",
			}}>
				<School className="svg" style={{
					width: "65px",
					height: "52.67px",
				}} />
			</center>
			<VGap gap={37} />

			<span className="white" style={{ fontSize: "20px" }}>
				Education
			</span>
		</Card>
	);
};

export default EducationCard;
