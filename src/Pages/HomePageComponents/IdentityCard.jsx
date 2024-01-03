import React from "react";

import Card from "../../Components/Card";
import { HMGap, VMGap } from "../../Components/Gap";

import Avatar from "../../Assets/Images/picture2.jpg";
import Resume from "../../Assets/Files/Resume.pdf";
import HomePageDataset from "../../Assets/Datasets/homePage.json";

import "./IdentityCard.css";

const IdentityCard = ({
	noObserverFadeIn = false,
	style = {},
	column = false,
}) => {
	return (
		<Card
			hoverable={true}
			width="auto"
			height="auto"
			noObserverFadeIn={noObserverFadeIn}
			style={{
				alignItems: "center",
				cursor: "pointer",
				...(column ? {
					display: "flex",
					flexDirection: "column",
				} : {}),
				...style,
			}}
			onClick={() => window.location.href = "/about-me"}
		>
			<img
				className="prevent-select"
				src={Avatar}
				alt="Avatar"
				width="auto"
				height="160vh"
				style={{
					transform: "translateZ(50px)",
					borderTopLeftRadius: "20px",
					borderBottomRightRadius: "20px",
				}}
			/>

			<HMGap
				gap={column ? 0 : 35}
				style={{
					height: "100%",
				}}
			>
				<div style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100%",
				}}>
					<VMGap gap={column ? 15 : 0}>
						<span className="white" style={{ color: "#858585" }}>{HomePageDataset.headline}</span>
					</VMGap>
					<VMGap gap={5}>
						<span className="white" style={{ fontSize: "31px" }}>
							Saumitra
							<br />
							Topinkatti.
						</span>
					</VMGap>
					<VMGap gap={5}>
						<a
							href={Resume}
							style={{ all: "unset" }}
						>
							<span className="white button3" style={{ fontSize: "15px" }}>
								VIEW RESUME
							</span>
						</a>
					</VMGap>
				</div>
			</HMGap>
		</Card>
	);
};

export default IdentityCard;
