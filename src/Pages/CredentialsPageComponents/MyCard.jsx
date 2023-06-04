import React from "react";

import Card from "../../Components/Card";

import Avatar from "../../Assets/Images/picture.png";
import LinkedIn from "../../Assets/Images/LinkedIn-white.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import GitHub from "../../Assets/Images/GitHub.svg";
import Twitter from "../../Assets/Images/Twitter-white.svg";

import "./MyCard.css";

const MyCard = ({ style = {} }) => {
	return (
		<Card
			hoverable={false}
			hoverAnimation={false}
			style={{
				alignItems: "center",
				flexDirection: "column",
				...style,
			}}
		>
			<img
				src={Avatar}
				alt="Avatar"
				width={200}
			/>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "25px",
				marginTop: "33px",
			}}>Saumitra Topinkatti</span>

			<div style={{
				alignItems: "center",
				width: "100%",
				display: "flex",
				justifyContent: "space-around",
				marginTop: "30px",
				gap: "10px",
			}}>
				<a
					href="https://www.linkedin.com/in/saumitra-topinkatti-45a577208"
					target="_blank"
					rel="noreferrer"
				>
					<Card
						hoverAnimation={false}
						style={{
							padding: "20px",
						}}
					>
						<img
							className="svg"
							src={LinkedIn}
							alt="LinkedIn"
							height={20}
						/>
					</Card>
				</a>

				<a
					href="https://www.instagram.com/not_professor_oof"
					target="_blank"
					rel="noreferrer"
				>
					<Card
						hoverAnimation={false}
						style={{
							padding: "20px",
						}}
					>
						<img
							className="svg"
							src={Instagram}
							alt="Instagram"
							height={20}
						/>
					</Card>
				</a>

				<a
					href="https://github.com/SBTopZZZ-LG"
					target="_blank"
					rel="noreferrer"
				>
					<Card
						hoverAnimation={false}
						style={{
							padding: "20px",
						}}
					>
						<img
							className="svg"
							src={GitHub}
							alt="GitHub"
							height={20}
						/>
					</Card>
				</a>

				<a
					href="https://twitter.com/sbtopzzz"
					target="_blank"
					rel="noreferrer"
				>
					<Card
						hoverAnimation={false}
						style={{
							padding: "20px",
						}}
					>
						<img
							className="svg"
							src={Twitter}
							alt="Twitter"
							height={20}
						/>
					</Card>
				</a>
			</div>

			<a
				className="button"
				href="/contact"
				style={{
					width: "100%",
					marginTop: "30px",
				}}
			>
				Contact Me
			</a>
		</Card>
	);
};

export default MyCard;
