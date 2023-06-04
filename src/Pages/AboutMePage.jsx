import React, { useEffect, useState } from "react";

import ImageCard from "./AboutMePageComponents/ImageCard";
import InfoCard from "./AboutMePageComponents/InfoCard";
import ExperienceCard from "./AboutMePageComponents/ExperienceCard";
import EducationCard from "./AboutMePageComponents/EducationCard";
import TopSkillsCard from "./AboutMePageComponents/TopSkillsCard";
import TopCertificationsCard from "./AboutMePageComponents/TopCertificationsCard";

const AboutMePage = () => {
	const [sizeState, setSizeState] = useState(0);

	function handleResize() {
		if (window.innerWidth < 700)
			setSizeState(1);
		else
			setSizeState(0);
	}

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (sizeState === 1)
		return (
			<div style={{
				display: "flex",
				margin: "0px 24px",
			}}>
				<div style={{
					display: "grid",
					gap: "24px",
				}}>
					<span style={{
						fontSize: "45px",
						fontWeight: "bold",
						marginBottom: "16px",
						textAlign: "right",
						width: "100%",
					}}>
						<span style={{ fontWeight: "900" }}>/</span> ABOUT
					</span>
					<div style={{
						display: "flex",
						justifyContent: "center",
					}}>
						<ImageCard />
					</div>
					<InfoCard style={{ width: "auto" }} />
					<ExperienceCard style={{ width: "auto" }} />
					<EducationCard style={{ width: "auto" }} />
					<TopSkillsCard style={{ width: "auto" }} />
					<TopCertificationsCard style={{ width: "auto" }} />
				</div>
			</div>
		);

	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				width: "1076px",
				margin: "0px 24px",
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
