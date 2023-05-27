import React from "react";

import IdentityCard from "./HomePageComponents/IdentityCard";
import AboutMeCard from "./HomePageComponents/AboutMeCard";
import SocialsCard from "./HomePageComponents/SocialsCard";
import StatsCard from "./HomePageComponents/StatsCard";
import EducationCard from "./HomePageComponents/EducationCard";
import ProjectsCard from "./HomePageComponents/ProjectsCard";
import MarqueeCard from "./HomePageComponents/MarqueeCard";

import { VGap } from "../Components/Gap";

const HomePage = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}}>
			<div style={{
				width: "76.875%",
				maxWidth: "984px",
			}}>
				<div style={{
					display: "grid",
					gridTemplateColumns: "47.35% 25% 25%",
					gridTemplateRows: "55.47% 42.52%",
					columnGap: "13px",
					rowGap: "13px",
				}}>
					<IdentityCard key="identity-card" />
					<AboutMeCard key="about-me-card" />
					<SocialsCard key="socials-card" />

					<StatsCard key="stats-card" />
					<EducationCard key="education-card" />
					<ProjectsCard key="projects-card" />
				</div>
				<VGap gap={15} />

				<MarqueeCard key="marquee-card" />,
			</div>
		</div>
	);
};

export default HomePage;
