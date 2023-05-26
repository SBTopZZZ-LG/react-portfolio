import React from "react";

import IdentityCard from "./HomePageComponents/IdentityCard";
import AboutMeCard from "./HomePageComponents/AboutMeCard";
import SocialsCard from "./HomePageComponents/SocialsCard";
import StatsCard from "./HomePageComponents/StatsCard";
import EducationCard from "./HomePageComponents/EducationCard";

import ProjectsCard from "./HomePageComponents/ProjectsCard";
import MarqueeCard from "./HomePageComponents/MarqueeCard";

import { HGap } from "../Components/Gap";

const HomePage = () => {
	return (
		<div style={{
			display: "flex",
			flexFlow: "wrap",
			justifyContent: "center"
		}}>
			<IdentityCard />
			<AboutMeCard />
			<SocialsCard />
			<HGap gap="100%" />

			<StatsCard />
			<EducationCard />
			<ProjectsCard />
			<HGap gap="100%" />

			<MarqueeCard />
		</div>
	);
};

export default HomePage;
