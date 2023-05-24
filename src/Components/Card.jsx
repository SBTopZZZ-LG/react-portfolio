import React from "react";

import "./Card.css";

export const Padding = 35;

const Card = ({
	children,
	style = {},
	width = undefined,
	height = undefined,
}) => {
	return (
		<div className="card card-2" style={{
			...style,
			...(width === undefined ? { width: "fit-content" } : { width: (typeof width === "string" ? width : `${width}px`) }),
			...(height === undefined ? { height: "fit-content" } : { height: (typeof height === "string" ? height : `${height}px`) }),
		}}>
			{children}
		</div>
	);
};

export default Card;
