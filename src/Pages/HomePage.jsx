import React, { useEffect, useState } from "react";

import IdentityCard from "./HomePageComponents/IdentityCard";
import AboutMeCard from "./HomePageComponents/AboutMeCard";
import SocialsCard from "./HomePageComponents/SocialsCard";
import StatsCard from "./HomePageComponents/StatsCard";
import EducationCard from "./HomePageComponents/EducationCard";
import ProjectsCard from "./HomePageComponents/ProjectsCard";
import MarqueeCard from "./HomePageComponents/MarqueeCard";

const HomePage = () => {
	const [sizeState, setSizeState] = useState(0);

	function handleResize(ev) {
		if (window.innerWidth < 600)
			setSizeState(2);
		else if (window.innerWidth < 999)
			setSizeState(1);
		else
			setSizeState(0);
	}

	useEffect(() => {
		if (window.innerWidth < 600)
			setSizeState(2);
		else if (window.innerWidth < 999)
			setSizeState(1);
		else
			setSizeState(0);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (sizeState === 2)
		return (
			<div style={{
				display: "flex",
				justifyContent: "center",
				width: "100%",
				padding: "10px",
			}}>
				<div style={{
					display: "grid",
					gridTemplateColumns: "100%",
					gridTemplateRows: "auto",
					columnGap: "15px",
					rowGap: "15px",
					margin: "15px",
					width: "100%",
				}}>
					<IdentityCard
						key="identity-card"
						column={true}
						style={{
							gridColumn: "1 / span 1",
						}}
					/>

					<MarqueeCard
						key="marquee-card"
						style={{ gridColumn: "1 / span 1" }}
					/>

					<AboutMeCard
						key="about-me-card"
						style={{ gridColumn: "1 / span 1" }}
					/>

					<SocialsCard
						key="socials-card"
						style={{ gridColumn: "1 / span 1" }}
					/>

					<StatsCard
						key="stats-card"
						column={true}
						style={{ gridColumn: "1 / span 1" }}
					/>

					<EducationCard
						key="education-card"
						style={{ gridColumn: "1 / span 1" }}
					/>

					<ProjectsCard
						key="projects-card"
						style={{ gridColumn: "1 / span 1" }}
					/>
				</div>
			</div>
		);

	if (sizeState === 1)
		return (
			<div style={{
				display: "flex",
				justifyContent: "center",
				width: "100%",
			}}>
				<div style={{ width: "100%" }}>
					<div style={{
						display: "grid",
						gridTemplateColumns: "auto auto",
						gridTemplateRows: "auto",
						columnGap: "15px",
						rowGap: "15px",
						margin: "30px"
					}}>
						<IdentityCard
							key="identity-card"
							style={{ gridColumn: "1 / span 2" }}
						/>

						<MarqueeCard
							key="marquee-card"
							style={{ gridColumn: "1 / 3" }}
						/>

						<AboutMeCard
							key="about-me-card"
							style={{ gridColumn: "1 / span 1" }}
						/>
						<SocialsCard
							key="socials-card"
							style={{ gridColumn: "2 / span 1" }}
						/>

						<StatsCard
							key="stats-card"
							style={{ gridColumn: "1 / 3" }}
						/>

						<EducationCard
							key="education-card"
							style={{ gridColumn: "1 / span 1" }}
						/>
						<ProjectsCard
							key="projects-card"
							style={{ gridColumn: "2 / span 1" }}
						/>
					</div>
				</div>
			</div>
		);

	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}}>
			<div style={{ width: "984px" }}>
				<div style={{
					display: "grid",
					gridTemplateColumns: "2fr 1fr 1fr",
					gridTemplateRows: "238px 191px 1fr",
					columnGap: "15px",
					rowGap: "15px",
				}}>
					<IdentityCard key="identity-card" />
					<AboutMeCard key="about-me-card" />
					<SocialsCard key="socials-card" />

					<StatsCard key="stats-card" />
					<EducationCard key="education-card" />
					<ProjectsCard key="projects-card" />

					<MarqueeCard
						key="marquee-card"
						style={{ gridColumn: "1 / 4" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
