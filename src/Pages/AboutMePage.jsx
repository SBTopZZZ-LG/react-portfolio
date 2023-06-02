import React from "react";

import ImageCard from "./AboutMePageComponents/ImageCard";
import InfoCard from "./AboutMePageComponents/InfoCard";
import ExperienceCard from "./AboutMePageComponents/ExperienceCard";
import EducationCard from "./AboutMePageComponents/EducationCard";
import TopSkillsCard from "./AboutMePageComponents/TopSkillsCard";
import TopCertificationsCard from "./AboutMePageComponents/TopCertificationsCard";

const AboutMePage = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}}>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				width: "1100px",
			}}>
				<div style={{ display: "flex", gap: "25px" }}>
					<ImageCard style={{ height: "300px" }} />
					<div style={{
						alignItems: "flex-end",
						display: "flex",
						flexDirection: "column",
					}}>
						<span style={{
							fontSize: "45px",
							fontWeight: "bold",
							marginBottom: "16px",
						}}>
							<span style={{ fontWeight: "900" }}>/</span> ABOUT
						</span>
						<InfoCard style={{ flexGrow: "1" }} />
					</div>
				</div>
				<div style={{ display: "flex", gap: "25px" }}>
					<ExperienceCard style={{ flexGrow: "1", flexBasis: "0" }} />
					<EducationCard style={{ flexGrow: "1", flexBasis: "0" }} />
				</div>
				<div style={{ display: "flex", gap: "25px" }}>
					<TopSkillsCard style={{ width: "fit-content" }} />
					<TopCertificationsCard style={{ flexGrow: "1", flexBasis: "0" }} />
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
