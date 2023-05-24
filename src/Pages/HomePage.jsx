import React from "react";

import IdentityCard from "./HomePageComponents/IdentityCard";
import AboutMeCard from "./HomePageComponents/AboutMeCard";
import SocialsCard from "./HomePageComponents/SocialsCard";
import StatsCard from "./HomePageComponents/StatsCard";
import EducationCard from "./HomePageComponents/EducationCard";

import { HGap } from "../Components/Gap";
import ProjectsCard from "./HomePageComponents/ProjectsCard";

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
		</div>
	);
};

export default HomePage;
