import React, { useRef, useState, useEffect } from "react";

import "./Card.css";

export const Padding = 35;

const Card = ({
	children,
	hoverable = false,
	style = {},
	width = undefined,
	height = undefined,
	flexGrow = undefined,
	flexBasis = undefined,
}) => {
	const cardRef = useRef(null);
	const [shouldFadeIn, setShouldFadeIn] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShouldFadeIn(true);
				}
			},
			{ threshold: 0.5 } // Adjust the threshold as needed
		);

		observer.observe(cardRef.current);

		return () => {
			observer.unobserve(cardRef.current);
		};
	}, []);


	return (
		<div
			ref={cardRef}
			className={`card-2 ${hoverable ? "card" : "card2"} ${shouldFadeIn ? "fade-in" : ""}`}
			style={{
				...(width === undefined ? { width: "fit-content" } : { width: (typeof width === "string" ? width : `${width}px`) }),
				...(height === undefined ? { height: "fit-content" } : { height: (typeof height === "string" ? height : `${height}px`) }),
				...(flexGrow === undefined ? {} : { flexGrow }),
				...(flexBasis === undefined ? {} : { flexBasis }),
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Card;
