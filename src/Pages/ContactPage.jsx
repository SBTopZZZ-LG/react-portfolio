import React, { useState, useEffect } from "react";

import InfoSection from "./ContactPageComponents/InfoSection";
import FormCard from "./ContactPageComponents/FormCard";

const ContactPage = () => {
	const [sizeState, setSizeState] = useState(0);

	function handleResize() {
		if (window.innerWidth < 1000)
			setSizeState(1);
		else
			setSizeState(0);
	}

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div style={{
			width: "100%",
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{
				width: "1076px",
				margin: "0px 24px",
				display: "flex",
				flexDirection: "column",
			}}>
				<span style={{
					fontSize: (sizeState === 1 ? "7vw" : "45px"),
					fontWeight: "600",
					marginBottom: "50px",
					textAlign: "right",
				}}>
					<span style={{ fontWeight: "900" }}>/</span> CONTACT
				</span>

				<div style={{
					display: "flex",
					justifyContent: "space-around",
					gap: "160px",
					flexDirection: (sizeState === 0 ? "row" : "column"),
				}}>
					<InfoSection />
					<FormCard style={{
						flexGrow: "1",
						...(sizeState === 0 ? { maxWidth: "490px" } : {}),
						width: "100%",
					}} />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
