import React from "react";
import {
	School,
} from "@material-ui/icons";

import Card, { Padding } from "../../Components/Card";
import { VGap } from "../../Components/Gap";

const EducationCard = () => {
	return (
		<Card
			width={238 - Padding * 2}
			height={191 - Padding * 2}
			style={{
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
			}}
		>
			<VGap gap={18} />
			<center style={{
				width: "100%",
			}}>
				<School style={{
					width: "65px",
					height: "52.67px",
				}} />
			</center>
			<VGap gap={37} />

			<span style={{
				fontSize: "20px",
			}}>
				Education
			</span>
		</Card>
	);
};

export default EducationCard;
