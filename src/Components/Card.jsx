import React from "react";

import "./Card.css";

export const Padding = 35;

const Card = ({
	children,
	style = {},
	width = undefined,
	height = undefined,
	flexGrow = undefined,
	flexBasis = undefined,
}) => {
	return (
		<div className="card card-2" style={{
			...(width === undefined ? { width: "fit-content" } : { width: (typeof width === "string" ? width : `${width}px`) }),
			...(height === undefined ? { height: "fit-content" } : { height: (typeof height === "string" ? height : `${height}px`) }),
			...(flexGrow === undefined ? {} : { flexGrow }),
			...(flexBasis === undefined ? {} : { flexBasis }),
			...style,
		}}>
			{children}
		</div>
	);
};

export default Card;
