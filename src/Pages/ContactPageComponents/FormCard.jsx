import React, { useState } from "react";

import Card from "../../Components/Card";

import "./FormCard.css";

const FormCard = ({ style = {} }) => {
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function onSubmit() {
		window.open(`mailto:dev1912.sbtopzzz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi, I am ${name}.\n\n${message}`)}`);
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
				>
					Submit
				</div>
			</div>
		</Card>
	);
};

export default FormCard;
