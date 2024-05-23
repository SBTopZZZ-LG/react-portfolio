import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MyCard from "./CredentialsPageComponents/MyCard";

import { VGap } from "../Components/Gap";
import Attachment from "../Components/Attachment";

import data from "../Assets/Datasets/credentialsPage.js";

import "./CredentialsPage.scss";

const Tile = ({
	dateRange = ["Jan 1970", "Jun 1970"],
	title = "Job",
	company = "Company",
	children,
}) => {
	return (
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
			}}>{dateRange[0]} - {dateRange[1]}</span>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "20px",
			}}>{title}</span>

			<span style={{
				color: "#858585",
				fontWeight: "500",
				fontSize: "15px",
			}}>{company}</span>

			{children}
		</div>
	);
};

const Tile2 = ({
	title = "Tech",
	strength = "69",
}) => {
	return (
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
			}}>{strength} %</span>

			<span className="white" style={{
				fontWeight: "600",
				fontSize: "18px",
			}}>{title}</span>
		</div>
	);
};

const CredentialsPage = () => {
	const { hash } = useLocation();
	const [sizeState, setSizeState] = useState(0);

	function handleResize() {
		if (window.innerWidth < 800)
			setSizeState(1);
		else
			setSizeState(0);
	}

	useEffect(() => {
		const trimmedHash = hash.substring(1).trim().toLowerCase();
		if (trimmedHash === "about-me")
			document.getElementById("about-me-section").scrollIntoView();
		else if (trimmedHash === "experience")
			document.getElementById("experience-section").scrollIntoView();
		else if (trimmedHash === "education")
			document.getElementById("education-section").scrollIntoView();
		else if (trimmedHash === "skills")
			document.getElementById("skills-section").scrollIntoView();
	}, [hash]);

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				alignItems: "end",
				width: "1076px",
				margin: "0px 24px",
				display: "flex",
				flexDirection: "column",
			}}>
				<span style={{
					fontSize: (sizeState === 1 ? "7vw" : "45px"),
					whiteSpace: "nowrap",
					fontWeight: "600",
					marginBottom: "16px",
				}}>
					<span style={{ fontWeight: "900" }}>/</span> CREDENTIALS
				</span>

				<div style={{
					...(sizeState === 1 ? { alignItems: "center" } : {}),
					width: "100%",
					display: "flex",
					flexDirection: (sizeState === 1 ? "column" : "row"),
					gap: "45px",
				}}>
					<MyCard />

					<div style={{
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
						gap: "30px",
					}}>
						<span id="about-me-section" className="title">ABOUT ME</span>
						<div className="content">
							<span style={{ color: "#c2c2c2" }}>
								{data.aboutMe.body.map((content, index) => {
									if (index === 0)
										return <>{content}</>;
									return <><br /><br />{content}</>;
								})}
							</span>

							{data.aboutMe.attachments.map(attachment => (
								<Attachment
									key={attachment.name}
									name={attachment.name}
									file={attachment.file}
									size={attachment.size}
								/>
							))}
						</div>

						<span id="experience-section" className="title">EXPERIENCE</span>
						<div className="content">
							{data.experience.map(data => (
								<Tile
									key={data.date}
									dateRange={data.date}
									title={data.title}
									company={data.company}
								>
									<VGap gap={10} />
									<span style={{ color: "#c2c2c2" }}>
										{data.description.map((content, index) => {
											if (index === 0)
												return <>{content}</>;
											return <><br /><br />{content}</>;
										})}
									</span>

									{data.attachments.map(attachment => (
										<Attachment
											key={attachment.name}
											name={attachment.name}
											file={attachment.file}
											size={attachment.size}
										/>
									))}
								</Tile>
							)).map((tile, index) => {
								if (index === 0)
									return <>{tile}</>;
								return <><VGap gap={31} />{tile}</>;
							})}
						</div>

						<span id="education-section" className="title">EDUCATION</span>
						<div className="content">
							{data.education.map(data => (
								<Tile
									key={data.date}
									dateRange={data.date}
									title={data.title}
									company={data.organization}
								>
									<VGap gap={10} />
									<span style={{ color: "#c2c2c2" }}>
										{data.description.map((content, index) => {
											if (index === 0)
												return <>{content}</>;
											return <><br /><br />{content}</>;
										})}
									</span>

									{data.attachments.map(attachment => (
										<Attachment
											key={attachment.name}
											name={attachment.name}
											file={attachment.file}
											size={attachment.size}
										/>
									))}
								</Tile>
							)).map((tile, index) => {
								if (index === 0)
									return <>{tile}</>;
								return <><VGap gap={31} />{tile}</>;
							})}
						</div>

						<span id="skills-section" className="title">SKILLS</span>
						<div className="content">
							<div style={{
								display: "grid",
								gridTemplateColumns: "auto auto",
								rowGap: "35px",
								justifyContent: "space-between",
								maxWidth: (sizeState === 0 ? "400px" : "100%"),
								boxSizing: "border-box",
							}}>
								{data.skills.map(data => (
									<Tile2
										key={data.title}
										strength={data.strength}
										title={data.title}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default CredentialsPage;
