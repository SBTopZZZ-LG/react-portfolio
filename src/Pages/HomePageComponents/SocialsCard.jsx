import React from "react";

import Card, { Padding } from "../../Components/Card";
import { VGap } from "../../Components/Gap";

import LinkedIn from "../../Assets/Images/LinkedIn.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import Github from "../../Assets/Images/GitHub.svg";
import Twitter from "../../Assets/Images/Twitter.svg";

import "./SocialsCard.css";

const SocialsCard = () => {
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
			<center style={{
				width: "100%",
			}}>
				<div className="grid-container">
					<a
						className="left-icon"
						href="https://www.linkedin.com/in/saumitra-topinkatti-45a577208"
						target="_blank"
						rel="noreferrer"
					>
						<img src={LinkedIn} alt="LinkedIn" />
					</a>

					<a
						href="https://www.instagram.com/not_professor_oof"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Instagram} alt="Instagram" />
					</a>

					<a
						className="left-icon"
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

			<span style={{ color: "#858585" }}>
				Stay With Me
			</span>
			<VGap gap={5} />
			<span style={{ fontSize: "20px" }}>
				Profiles
			</span>
		</Card >
	);
};

export default SocialsCard;
