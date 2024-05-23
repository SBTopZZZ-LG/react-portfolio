import React, { useState } from "react";

import Card from "../../Components/Card";

import ContactPageDataset from "../../Assets/Datasets/contactPage.json";

import "./FormCard.scss";

const FormCard = ({ style = {} }) => {
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function onSubmit() {
		window.open(`mailto:${ContactPageDataset.contact_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi, I am ${name}.\n\n${message}`)}`);
	}

	return (
		<Card
			width="auto"
			hoverAnimation={false}
			style={{
				flexDirection: "column",
				...style,
			}}
		>
			<span style={{
				fontSize: "34px",
				fontWeight: "600",
			}}>
				Let's work <span style={{ color: "#3F97FF" }}>together</span>.
			</span>

			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "21px",
				marginTop: "41px",
			}}>
				<input
					type="name"
					placeholder="Name *"
					onChange={e => setName(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Your Subject *"
					onChange={e => setSubject(e.target.value)}
				/>

				<textarea
					placeholder="Your Message *"
					style={{ height: "120px" }}
					onChange={e => setMessage(e.target.value)}
				/>

				<div
					className="button button2"
					onClick={onSubmit}
					onKeyDown={onSubmit}
				>
					Submit
				</div>
			</div>
		</Card>
	);
};

export default FormCard;
