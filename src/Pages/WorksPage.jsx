import React from "react";

import Card from "../Components/Card";

import data from "../Assets/Datasets/worksPage.json";

import GitHub from "../Assets/Images/GitHub.svg";
import Url from "../Assets/Images/Web.svg";

const Tile = ({
	dateRange = ["Jan 1970", "Jun 1970"],
	title = "Project",
	skills = ["Skill 1", "Skill 2"],
	links = {},
}) => {
	return (
		<Card
			hoverable={true}
			hoverAnimation={false}
			style={{ width: "auto" }}
		>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
				justifyContent: "space-around",
			}}>
				<span style={{
					color: "#858585",
					fontWeight: "500",
					fontSize: "15px",
				}}>{`${dateRange[0]}${dateRange.length > 1 ? ` - ${dateRange[1]}` : ""}`}</span>

				<span className="white" style={{
					fontWeight: "600",
					fontSize: "22px",
				}}>{title}</span>

				{skills.length > 0 && <span style={{
					color: "#858585",
					fontWeight: "500",
					fontSize: "15px",
					marginTop: "13px",
				}}>Skills: {skills.join(", ")}</span>}

				{("github" in links || "url" in links) &&
					<div style={{
						display: "flex",
						alignItems: "center",
						marginTop: "18px",
						gap: "20px",
					}}>
						{"github" in links &&
							<a
								href={links.github}
								style={{ all: "unset", cursor: "pointer" }}
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="svg"
									src={GitHub}
									alt="GitHub"
									height={35}
								/>
							</a>
						}
						{"url" in links &&
							<a
								href={links.url}
								style={{ all: "unset", cursor: "pointer" }}
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="svg"
									src={Url}
									alt="Url"
									height={35}
								/>
							</a>
						}
					</div>}
			</div>
		</Card>
	);
};

const Works = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				display: "grid",
				gap: "24px",
				width: "1076px",
				margin: "0px 24px",
			}}>
				<span style={{
					fontSize: "45px",
					fontWeight: "600",
					marginBottom: "16px",
					width: "auto",
					textAlign: "right",
				}}>
					<span style={{ fontWeight: "900" }}>/</span> WORKS
				</span>

				{data.projects.map(data => (
					<Tile
						key={data.title}
						dateRange={data.date}
						title={data.title}
						skills={data.skills}
						links={data.links}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
