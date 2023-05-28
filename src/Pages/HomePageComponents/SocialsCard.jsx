import React from "react";

import Card from "../../Components/Card";
import { VGap } from "../../Components/Gap";

import LinkedIn from "../../Assets/Images/LinkedIn.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import Github from "../../Assets/Images/GitHub.svg";
import Twitter from "../../Assets/Images/Twitter.svg";

import "./SocialsCard.css";

const SocialsCard = ({
	style = {},
}) => {
	return (
		<Card
			width="auto"
			height="auto"
			style={{
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "end",
				textAlign: "left",
				...style,
			}}
		>
			<center style={{
				width: "100%",
			}}>
				<div className="grid-container prevent-select">
					<a
						className="left-icon"
						href="https://www.linkedin.com/in/saumitra-topinkatti-45a577208"
						target="_blank"
						rel="noreferrer"
					>
						<img src={LinkedIn} alt="LinkedIn" />
					</a>

					<a
						className="svg"
						href="https://www.instagram.com/not_professor_oof"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Instagram} alt="Instagram" />
					</a>

					<a
						className="left-icon svg"
						href="https://github.com/SBTopZZZ-LG"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Github} alt="GitHub" />
					</a>

					<a
						href="https://twitter.com/sbtopzzz"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Twitter} alt="Twitter" />
					</a>
				</div>
			</center>
			<VGap gap={37} />

			<span className="white" style={{ color: "#858585" }}>
				Stay With Me
			</span>
			<VGap gap={5} />
			<span className="white" style={{ fontSize: "20px" }}>
				Profiles
			</span>
		</Card >
	);
};

export default SocialsCard;
