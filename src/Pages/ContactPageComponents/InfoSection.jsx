import React from "react";

import Card from "../../Components/Card";

import Email from "../../Assets/Images/Email.svg";
import Phone from "../../Assets/Images/Phone.svg";
import LinkedIn from "../../Assets/Images/LinkedIn-white.svg";
import GitHub from "../../Assets/Images/GitHub.svg";
import Instagram from "../../Assets/Images/Instagram.svg";
import Twitter from "../../Assets/Images/Twitter-white.svg";

const InfoSection = () => {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			gap: "50px",
		}}>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "30px",
			}}>
				<span style={{
					fontSize: "20px",
					fontWeight: "600",
				}}>CONTACT INFO</span>

				{/* Email */}
				<div style={{
					display: "flex",
					gap: "25px",
				}}>
					<Card
						hoverAnimation={false}
						style={{ padding: "20px" }}
					>
						<img
							className="svg"
							src={Email}
							alt="Email"
						/>
					</Card>

					<div style={{
						display: "flex",
						flexDirection: "column",
						gap: "6px",
					}}>
						<span style={{
							color: "#858585",
							fontSize: "16px",
							fontWeight: "600",
						}}>EMAIL ME</span>

						<a
							href="mailto:dev1912.sbtopzzz@gmail.com"
							target="_blank"
							rel="noreferrer"
							style={{
								all: "unset",
								cursor: "pointer",
							}}
						>
							<span style={{
								fontSize: "16px",
								fontWeight: "600",
							}}>dev1912.sbtopzzz@gmail.com</span>
						</a>
					</div>
				</div>

				{/* Phone */}
				<div style={{
					display: "flex",
					gap: "25px",
				}}>
					<Card
						hoverAnimation={false}
						style={{ padding: "20px" }}
					>
						<img
							className="svg"
							src={Phone}
							alt="Phone"
						/>
					</Card>

					<div style={{
						display: "flex",
						flexDirection: "column",
						gap: "6px",
					}}>
						<span style={{
							color: "#858585",
							fontSize: "16px",
							fontWeight: "600",
						}}>CALL ME</span>

						<a
							href="https://wa.me/919108424029"
							target="_blank"
							rel="noreferrer"
							style={{
								all: "unset",
								cursor: "pointer",
							}}
						>
							<span style={{
								fontSize: "16px",
								fontWeight: "600",
							}}>+91 91084 24029</span>
						</a>
					</div>
				</div>
			</div>

			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "30px",
			}}>
				<span style={{
					fontSize: "20px",
					fontWeight: "600",
				}}>SOCIAL INFO</span>

				<div style={{
					display: "flex",
					gap: "25px",
				}}>
					<a
						href="https://www.linkedin.com/in/saumitra-topinkatti-45a577208"
						target="_blank"
						rel="noreferrer"
					>
						<Card
							hoverAnimation={false}
							style={{ padding: "20px" }}
						>
							<img
								className="svg"
								src={LinkedIn}
								alt="LinkedIn"
								height={30}
							/>
						</Card>
					</a>

					<a
						href="https://github.com/SBTopZZZ-LG"
						target="_blank"
						rel="noreferrer"
					>
						<Card
							hoverAnimation={false}
							style={{ padding: "20px" }}
						>
							<img
								className="svg"
								src={GitHub}
								alt="GitHub"
								height={30}
							/>
						</Card>
					</a>
				</div>

				<div style={{
					display: "flex",
					gap: "25px",
				}}>
					<a
						href="https://www.instagram.com/not_professor_oof"
						target="_blank"
						rel="noreferrer"
					>
						<Card
							hoverAnimation={false}
							style={{ padding: "20px" }}
						>
							<img
								className="svg"
								src={Instagram}
								alt="Instagram"
								height={30}
							/>
						</Card>
					</a>

					<a
						href="https://twitter.com/sbtopzzz"
						target="_blank"
						rel="noreferrer"
					>
						<Card
							hoverAnimation={false}
							style={{ padding: "20px" }}
						>
							<img
								className="svg"
								src={Twitter}
								alt="Twitter"
								height={30}
							/>
						</Card>
					</a>
				</div>
			</div>
		</div>
	);
};

export default InfoSection;
