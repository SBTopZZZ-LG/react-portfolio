import React from "react";

import { VGap } from "../Components/Gap";

import Logo from "../Assets/Images/logo.png";

import "./MenuOverlay.css";

const MenuOverlay = ({
	paddingTop = undefined,
	onDismiss = undefined,
}) => {
	// TODO: Disable body's scrolling and make overlay scrollable

	return (
		<div
			className="full-screen-modal prevent-select"
			style={{
				...(paddingTop !== undefined ? { top: paddingTop } : {}),
			}}
			onClick={onDismiss}
		>
			<div className="modal-content">
				<VGap gap={59 - 15} />
				<img src={Logo} alt="Logo" />
				<VGap gap={69} />

				<div className="links">
					<a href="/">
						<span className="path-delim">/</span> HOME
					</a>
					<a href="/about-me">
						<span className="path-delim">/</span> ABOUT ME
					</a>
					<a href="/works">
						<span className="path-delim">/</span> WORKS
					</a>
					<a href="/contact">
						<span className="path-delim">/</span> CONTACT
					</a>
				</div>
			</div>

			<div
				className="modal-background"
				style={{
					...(paddingTop !== undefined ? { top: paddingTop } : {}),
				}}
			></div>
		</div>
	);
};

export default MenuOverlay;
