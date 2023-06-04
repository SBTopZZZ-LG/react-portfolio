import React, { useState, useEffect } from "react";

import MyCard from "./CredentialsPageComponents/MyCard";

import { VGap } from "../Components/Gap";

import "./CredentialsPage.css";
import { useLocation } from "react-router-dom";

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
					fontSize: "45px",
					fontWeight: "bold",
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
							I am Saumitra Topinkatti, a dedicated and driven student of Computer Science,
							always seeking new challenges and opportunities for growth. With a passion for
							technology, an appreciation for thought-provoking movies, and a penchant for
							solving puzzles, I am eagerly embracing the future and all the possibilities
							it holds.<br />
							<br />
							I am excited to contribute my skills, knowledge, and enthusiasm to make a positive
							impact in the ever-evolving world of technology.
						</div>

						<span id="experience-section" className="title">EXPERIENCE</span>
						<div className="content">
							<Tile
								dateRange={["March 2023", "Present"]}
								title="Flutter Development Intern"
								company="Tharasis (Part-time)"
							>
								<VGap gap={10} />
								<span style={{ color: "#c2c2c2" }}>
									Tharasis is a technology company that provides mobile products,
									including business tools and games, to its users. The company
									operates in several cities, including Delhi NCR, Bengaluru, Mumbai,
									Hyderabad, and Chennai.<br />
									<br />
									During my tenure at Tharasis, I served as a Flutter Development Intern.
									In addition to my development responsibilities, I also had the opportunity
									to contribute to various aspects of the company's operations. This involved
									tasks such as conducting online inquiries for services on behalf of the
									company and researching new technologies. Furthermore, I actively
									participated in the design and development of their business app for
									shops, working on creating visually appealing and functional application
									pages.
								</span>
							</Tile>

							<VGap gap={31} />
							<Tile
								dateRange={["March", "June 2022"]}
								title="Node.js Development Intern"
								company="Forty4Hz"
							>
								<VGap gap={10} />
								<span style={{ color: "#c2c2c2" }}>
									Forty4Hz is a forward-thinking company dedicated to empowering business
									users with simplified access to valuable insights. Their innovative self-learning
									business intelligence and analytics platform, INSIA, allows users to swiftly
									analyse diverse data sets using guided natural language search.<br />
									<br />
									During my internship at Forty4Hz, I had the privilege of serving as a Back-end
									(Node.js) Development Intern. The company had multiple development teams, each
									assigned to specific high-level tasks such as data collection, AI-based data
									analysis, and front-end development.<br />
									<br />
									In the data collection team, my responsibility was to optimise pre-defined
									database connectors for various popular data sources, including MySQL, MongoDB,
									Google Analytics, and Facebook Insights. This involved streamlining the connectors
									to ensure efficient and reliable data retrieval from these sources. It was a
									challenging task that required careful consideration and diligent effort.<br />
									<br />
									Additionally, I was given the task of researching the Google YouTube API and Data
									API. This involved gathering metrics, dimensions, and understanding the available
									APIs to effectively download data. Building a functional database connector for
									the YouTube API and Data API was a demanding undertaking. However, through
									perseverance and dedication, I successfully completed the task, enabling seamless
									integration with these APIs.
								</span>
							</Tile>
						</div>

						<span id="education-section" className="title">EDUCATION</span>
						<div className="content">
							<Tile
								dateRange={["2020", "2024"]}
								title="Bachelor Degree in Computer Science"
								company="KLS Gogte Institute of Technology, Belagavi"
							>
								<VGap gap={10} />
								<span style={{ color: "#c2c2c2" }}>
									I am currently pursuing for Bachelor in Computer Science at KLS GIT, Belagavi.<br />
									<br />
									In addition to my academic pursuits, I have actively engaged in numerous coding events
									and competitions, showcasing my skills and passion for programming.<br />
									<br />
									Furthermore, I had the privilege of serving as the Technical Lead for a club
									for a period of one year. In this leadership role, I took charge of overseeing
									technical aspects and guiding fellow members in their endeavours. It was a
									valuable experience that allowed me to further enhance my technical expertise
									while fostering a collaborative and supportive environment within the club.
								</span>
							</Tile>

							<VGap gap={31} />
							<Tile
								dateRange={["2018", "2020"]}
								title="Pre-University"
								company="SKE Govindram Seksaria Science College, Belagavi"
							>
								<VGap gap={10} />
								<span style={{ color: "#c2c2c2" }}>
									I completed my Pre-University at GSS College, Belagavi, in 2020. I was admitted to the college in the year 2018.
								</span>
							</Tile>

							<VGap gap={31} />
							<Tile
								dateRange={["2008", "2018"]}
								title="Schooling"
								company="Dnyan Prabodhan Mandir, Belagavi"
							>
								<VGap gap={10} />
								<span style={{ color: "#c2c2c2" }}>
									I completed my schooling at DPM School, Belagavi, in 2018. I was admitted to the school in the year 2008.
								</span>
							</Tile>
						</div>

						<span id="skills-section" className="title">SKILLS</span>
						<div className="content">
							<div style={{
								display: "flex",
								justifyContent: "space-between",
								maxWidth: (sizeState === 0 ? "400px" : "100%"),
							}}>
								<div style={{
									display: "flex",
									flexDirection: "column",
									gap: "35px",
								}}>
									<Tile2
										strength="90"
										title="Flutter"
									/>

									<Tile2
										strength="97"
										title="Node.js"
									/>

									<Tile2
										strength="94"
										title="JavaScript"
									/>

									<Tile2
										strength="78"
										title="React"
									/>

									<Tile2
										strength="85"
										title="Figma"
									/>

									<Tile2
										strength="94"
										title="Java"
									/>
								</div>

								<div style={{
									display: "flex",
									flexDirection: "column",
									gap: "35px",
								}}>
									<Tile2
										strength="92"
										title="REST APIs"
									/>

									<Tile2
										strength="83"
										title="Microservices"
									/>

									<Tile2
										strength="88"
										title="C/C++"
									/>

									<Tile2
										strength="79"
										title="Python"
									/>

									<Tile2
										strength="89"
										title="MongoDB"
									/>

									<Tile2
										strength="77"
										title="Photoshop"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CredentialsPage;
