import React from "react";

import IdentityCard from "./HomePageComponents/IdentityCard";
import AboutMeCard from "./HomePageComponents/AboutMeCard";
import SocialsCard from "./HomePageComponents/SocialsCard";
import StatsCard from "./HomePageComponents/StatsCard";
import EducationCard from "./HomePageComponents/EducationCard";
import ProjectsCard from "./HomePageComponents/ProjectsCard";
import MarqueeCard from "./HomePageComponents/MarqueeCard";

const HomePage = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}}>
			<div style={{ width: "984px" }}>
				<div style={{
					display: "grid",
					gridTemplateColumns: "47.35% 25% 25%",
					gridTemplateRows: "238px 191px 60px",
					columnGap: "12px",
					rowGap: "12px",
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
