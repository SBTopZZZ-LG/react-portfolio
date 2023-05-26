import React from 'react';

import { HGap } from "../../Components/Gap";

import Words from "../../Assets/Datasets/words.json";

import "./MarqueeCard.css";
import Card from "../../Components/Card";
import Marquee from "react-fast-marquee";

const MarqueeCard = ({
	strings = Words,
}) => {
	const dotDistance = 15;

	const marqueeContent = strings.map((string, index) => (
		<React.Fragment key={index}>
			<span>{string}</span>
			{index !== strings.length - 1 && (
				<div style={{
					display: "inline-flex",
				}}>
					<HGap gap={dotDistance} />
					<span className="dot" />
					<HGap gap={dotDistance} />
				</div>
			)}
		</React.Fragment>
	));

	return (
		<Card
			width={984}
			style={{
				flexDirection: "column",
				justifyContent: "center",
				padding: "14px 0px"
			}}
		>
			<Marquee
				speed={80}
			>
				<div className="marquee-content">
					{marqueeContent}
				</div>
			</Marquee>
		</Card>
	);
};

export default MarqueeCard;
