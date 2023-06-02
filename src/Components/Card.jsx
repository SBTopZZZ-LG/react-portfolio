import React, { useRef, useState, useEffect } from "react";

import "./Card.css";

export const Padding = 35;

const Card = ({
	children,
	hoverable = false,
	hoverAnimation = true,
	style = {},
	width = undefined,
	height = undefined,
	flexGrow = undefined,
	flexBasis = undefined,
}) => {
	const cardRef = useRef(null);

	const [shouldFadeIn, setShouldFadeIn] = useState(false);
	const [rotate, setRotate] = useState({
		rotateX: 0,
		rotateY: 0,
	});

	// Get relative coordinates to the parent
	function relativeCoords(event) {
		const bounds = event.currentTarget.getBoundingClientRect();
		return {
			x: event.clientX - bounds.left,
			y: event.clientY - bounds.top,
		};
	}

	const handleMouseMove = (event) => {
		if (!hoverAnimation)
			return setRotate({ rotateX: 0, rotateY: 0 });

		const innerWidth = cardRef.current.clientWidth;
		const innerHeight = cardRef.current.clientHeight;
		const { x: pageX, y: pageY } = relativeCoords(event);

		const newRotateX = Math.max(-5, Math.min(5, -(innerWidth / 2 - pageX)));
		const newRotateY = Math.max(-5, Math.min(5, (innerHeight / 2 - pageY)));
		setRotate({
			rotateX: newRotateX,
			rotateY: newRotateY,
		});
	};
	const handleMouseOut = () => setRotate({ rotateX: 0, rotateY: 0 });

	useEffect(() => {
		if (!hoverAnimation)
			return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShouldFadeIn(true);
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(cardRef.current);

		const current = cardRef.current;
		return () => {
			observer.unobserve(current);
		};
	}, [hoverAnimation]);

	return (
		<div
			ref={cardRef}
			className={`card-2 ${hoverable ? "card" : "card2"} ${shouldFadeIn ? "fade-in" : ""}`}
			style={{
				...(width === undefined ? { width: "fit-content" } : { width: (typeof width === "string" ? width : `${width}px`) }),
				...(height === undefined ? { height: "fit-content" } : { height: (typeof height === "string" ? height : `${height}px`) }),
				...(flexGrow === undefined ? {} : { flexGrow }),
				...(flexBasis === undefined ? {} : { flexBasis }),
				...(hoverAnimation ? { transform: `rotateX(${rotate.rotateY}deg) rotateY(${rotate.rotateX}deg)` } : {}),
				...style,
			}}
			onMouseMove={hoverAnimation ? handleMouseMove : undefined}
			onMouseOut={hoverAnimation ? handleMouseOut : undefined}
		>
			{children}
		</div>
	);
};

export default Card;
