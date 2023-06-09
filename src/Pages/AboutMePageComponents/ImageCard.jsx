import React from "react";

import Card from "../../Components/Card";

import Avatar from "../../Assets/Images/picture.png";

const ImageCard = ({
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			height="auto"
			style={{
				aspectRatio: "1 / 1",
				...style
			}}
		>
			<img
				className="prevent-select"
				src={Avatar}
				alt="Avatar"
				width="auto"
				height="auto"
			/>
		</Card>
	);
};

export default ImageCard;
