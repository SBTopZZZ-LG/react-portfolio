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
