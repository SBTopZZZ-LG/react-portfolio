import React from "react";

import Card from "../../Components/Card";

import Avatar from "../../Assets/Images/picture.png";

const ImageCard = ({
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			style={{
				aspectRatio: "1 / 1",
				display: "grid",
				maxHeight: "300px",
				...style,
			}}
		>
			<img
				className="prevent-select"
				src={Avatar}
				alt="Avatar"
				height="100%"
				style={{ aspectRatio: "1 / 1" }}
			/>
		</Card>
	);
};

export default ImageCard;
