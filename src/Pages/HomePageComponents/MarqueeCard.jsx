import React from 'react';
import Marquee from "react-fast-marquee";

import { HGap } from "../../Components/Gap";
import Card from "../../Components/Card";

import HomePageDataset from "../../Assets/Datasets/homePage.json";

import "./MarqueeCard.css";

const MarqueeCard = ({
	noObserverFadeIn = false,
	strings = HomePageDataset.marqueeText,
	style = {},
}) => {
	const dotDistance = 15;

	const marqueeContent = strings.map((string, index) => (
		<React.Fragment key={index}>
			<span className="white">{string}</span>
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
			width="auto"
			hoverAnimation={false}
			noObserverFadeIn={noObserverFadeIn}
			style={{
				flexDirection: "column",
				justifyContent: "center",
				padding: "14px 10px",
				...style,
			}}
		>
			<Marquee delay={1} speed={80}>
				<div className="marquee-content">
					{marqueeContent}
				</div>
			</Marquee>
		</Card>
	);
};

export default MarqueeCard;
