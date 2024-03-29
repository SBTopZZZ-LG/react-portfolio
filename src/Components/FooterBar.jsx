import React, { useEffect, useState } from "react";

import { VGap } from "./Gap";

import Logo from "../Assets/Images/logo.png";

import "./FooterBar.css";

const FooterBar = () => {
	const [lineBreak, setLineBreak] = useState(false);

	function handleResize(ev) {
		setLineBreak(window.innerWidth <= 700);
	}

	useEffect(() => {
		setLineBreak(window.innerWidth <= 700);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<footer className="wide">
			<img src={Logo} alt="Logo" />
			<VGap gap={32} />

			<div
				className={`${lineBreak ? "links-col" : "links-row"} prevent-select`}
				style={{
					...(!lineBreak ? { width: "600px" } : {}),
				}}
			>
				<a href="/">
					HOME
				</a>
				<a href="/about-me">
					ABOUT ME
				</a>
				<a href="/works">
					WORKS
				</a>
				<a href="/contact">
					CONTACT
				</a>
			</div>
		</footer>
	);
};

export default FooterBar;
