import React from "react";

import Card from "../../Components/Card";

import Avatar from "../../Assets/Images/picture2.jpg";

const ImageCard = ({
	style = {},
}) => {
	return (
		<Card
			hoverable={true}
			width={300}
			height={300}
			style={{
				aspectRatio: "1 / 1",
				display: "grid",
				maxHeight: "300px",
				position: "relative",
				...style,
			}}
		>
			<img
				className="prevent-select"
				src={Avatar}
				alt="Avatar"
				style={{
					aspectRatio: "1 / 1",
					height: "230px",
				}}
			/>
		</Card>
	);
};

export default ImageCard;
