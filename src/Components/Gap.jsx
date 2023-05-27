import React from "react";

export const VGap = ({ gap = 0 }) => {
	return (
		<div style={{
			height: (typeof gap === "string" ? gap : `${gap}px`),
		}}></div>
	);
};

export const HGap = ({ gap = 0 }) => {
	return (
		<div style={{
			width: (typeof gap === "string" ? gap : `${gap}px`),
		}}></div>
	);
};

export const VMGap = ({
	gap = 0,
	children,
	style = {},
}) => {
	return (
		<div style={{
			width: "max-content",
			height: "max-content",
			marginTop: (typeof gap === "string" ? gap : `${gap}px`),
			...style,
		}}>
			{children}
		</div>
	);
};

export const HMGap = ({
	gap = 0,
	children,
	style = {},
}) => {
	return (
		<div style={{
			width: "max-content",
			height: "max-content",
			marginLeft: (typeof gap === "string" ? gap : `${gap}px`),
			...style,
		}}>
			{children}
		</div>
	);
};
