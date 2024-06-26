import Resume from "../Files/Resume.pdf";
import InfraspecIC from "../Files/Infraspec - Internship Certificate.pdf";
import DataDaysRC from "../Files/DataDays - Recommendation Letter.pdf";
import DataDaysIC from "../Files/DataDays - Internship Certificate.pdf";
import TharasisCoC from "../Files/Tharasis - Certificate of Completion.png";
import TharasisRC from "../Files/Tharasis - Recommendation Letter.pdf";
import UnifiedLoA from "../Files/Unified - Letter of Appreciation.pdf";

const dataset = {
	aboutMe: {
		body: [
			"I am Saumitra Topinkatti, a dedicated and driven student of Computer Science, always seeking new challenges and opportunities for growth. With a passion for technology, an appreciation for thought-provoking movies, and a penchant for solving puzzles, I am eagerly embracing the future and all the possibilities it holds.",
			"I am excited to contribute my skills, knowledge, and enthusiasm to make a positive impact in the ever-evolving world of technology.",
		],
		attachments: [
			{
				name: "Resume.pdf",
				file: Resume,
				size: "111 KB",
			},
		],
	},
	experience: [
		{
			date: ["January", "April 2024"],
			title: "Software Development Intern",
			company: "Infraspec",
			description: [
				"During my internship at Infraspec, I engaged deeply with Agile methodologies, learning techniques like Pair Programming and Iterative Development. I worked on creating and refining user stories using the I.N.V.E.S.T criteria, which improved my team collaboration and project alignment skills. This exposure to practical Agile practices helped me understand the dynamics of efficient software development in a professional setting.",
				"I also gained hands-on experience with Java’s JUnit 5 and Mockito for Automated Software Testing. This part of my internship focused on ensuring our code was robust and error-free, teaching me how to implement detailed unit and integration tests. Learning these testing frameworks provided me with the tools to uphold high standards of code quality, guided by clean code principles like S.O.L.I.D and Y.A.G.N.I.",
				"I also had the opportunity to work with Java Spring Boot framework, which involved understanding application bootstrapping, bean management, and annotation utilization. Alongside this, I developed a Discord bot, applying my testing skills to ensure functionality through Mocha and Chai for unit tests and more comprehensive integration tests. This experience not only enhanced my software development skills but also equipped me with the practical knowledge to manage and execute complex software tasks efficiently.",
			],
			attachments: [
				{
					name: "Internship Certificate.pdf",
					file: InfraspecIC,
					size: "217 KB",
				},
			],
		},
		{
			date: ["August", "December 2023"],
			title: "Full Stack Development Intern",
			company: "DataDays",
			description: [
				"During my internship at DataDays as a Full Stack Developer, my primary responsibilities revolved around constructing and managing critical components of the application using Node.js and Express. A significant aspect of my role involved enhancing the backend functionality by implementing efficient logging mechanisms and seamlessly integrating them with AWS S3 for streamlined log management.",
				"Beyond coding, I actively engaged in familiarizing myself with the app's business plan, gaining insights into its purpose, competitive landscape, and development methodology. This involved understanding how we employed Agile methods and MVP principles throughout the development process, contributing to my overall professional growth and understanding of software development practices.",
			],
			attachments: [
				{
					name: "Internship Certificate.pdf",
					file: DataDaysIC,
					size: "106 KB",
				},
				{
					name: "Recommendation Letter.pdf",
					file: DataDaysRC,
					size: "127 KB",
				},
			],
		},
		{
			date: ["April", "July 2023"],
			title: "Flutter Development Intern",
			company: "Tharasis (Part-time)",
			description: [
				"Tharasis is a technology company that provides mobile products, including business tools and games, to its users. The company operates in several cities, including Delhi NCR, Bengaluru, Mumbai, Hyderabad, and Chennai.",
				"During my tenure at Tharasis, I served as a Flutter Development Intern. In addition to my development responsibilities, I also had the opportunity to contribute to various aspects of the company's operations. This involved tasks such as conducting online inquiries for services on behalf of the company and researching new technologies. Furthermore, I actively participated in the design and development of their business app for shops, working on creating visually appealing and functional application pages.",
				"I also had the valuable opportunity to acquire knowledge in implementing analytics tracking within the application using the Mixpanel SDK. Through this experience, I gained proficiency in tracking and monitoring various metrics, which enabled me to generate meaningful outputs through the Mixpanel Dashboard.",
				"Additionally, I was assigned the responsibility of conducting thorough application testing across different devices. This rigorous testing process allowed me to identify any flaws or issues within the application. To streamline this process, I utilized the AWS Device Farm, a powerful tool that facilitated efficient testing and reporting of identified flaws.",
			],
			attachments: [
				{
					name: "Certification of Completion.png",
					file: TharasisCoC,
					size: "156 KB",
				},
				{
					name: "Recommendation Letter.pdf",
					file: TharasisRC,
					size: "33 KB",
				},
			],
		},
		{
			date: ["March", "June 2022"],
			title: "Node.js Development Intern",
			company: "Forty4Hz",
			description: [
				"Forty4Hz is a forward-thinking company dedicated to empowering business users with simplified access to valuable insights. Their innovative self-learning business intelligence and analytics platform, INSIA, allows users to swiftly analyse diverse data sets using guided natural language search.",
				"During my internship at Forty4Hz, I had the privilege of serving as a Back-end (Node.js) Development Intern. The company had multiple development teams, each assigned to specific high-level tasks such as data collection, AI-based data analysis, and front-end development.",
				"In the data collection team, my responsibility was to optimise pre-defined database connectors for various popular data sources, including MySQL, MongoDB, Google Analytics, and Facebook Insights. This involved streamlining the connectors to ensure efficient and reliable data retrieval from these sources. It was a challenging task that required careful consideration and diligent effort.",
				"Additionally, I was given the task of researching the Google YouTube API and Data API. This involved gathering metrics, dimensions, and understanding the available APIs to effectively download data. Building a functional database connector for the YouTube API and Data API was a demanding undertaking. However, through perseverance and dedication, I successfully completed the task, enabling seamless integration with these APIs.",
			],
			attachments: [],
		},
	],
	education: [
		{
			date: ["2020", "2024"],
			title: "Bachelor Degree in Computer Science",
			organization: "KLS Gogte Institute of Technology, Belagavi",
			description: [
				"I am currently pursuing for Bachelor in Computer Science at KLS GIT, Belagavi.",
				"In addition to my academic pursuits, I have actively engaged in numerous coding events and competitions, showcasing my skills and passion for programming.",
				"Furthermore, I had the privilege of serving as the Technical Lead for a club for a period of one year. In this leadership role, I took charge of overseeing technical aspects and guiding fellow members in their endeavours. It was a valuable experience that allowed me to further enhance my technical expertise while fostering a collaborative and supportive environment within the club.",
			],
			attachments: [
				{
					name: "Letter of Appreciation.pdf",
					file: UnifiedLoA,
					size: "377 KB",
				},
			],
		},
		{
			date: ["2018", "2020"],
			title: "Pre-University",
			organization: "SKE Govindram Seksaria Science College, Belagavi",
			description: [
				"I completed my Pre-University at GSS College, Belagavi, in 2020. I was admitted to the college in the year 2018.",
			],
			attachments: [],
		},
		{
			date: ["2008", "2018"],
			title: "Schooling",
			organization: "Dnyan Prabodhan Mandir, Belagavi",
			description: [
				"I completed my schooling at DPM School, Belagavi, in 2018. I was admitted to the school in the year 2008.",
			],
			attachments: [],
		},
	],
	skills: [
		{
			title: "Flutter",
			strength: 88,
		},
		{
			title: "React",
			strength: 80,
		},
		{
			title: "Node.js",
			strength: 97,
		},
		{
			title: "Figma",
			strength: 85,
		},
		{
			title: "JavaScript",
			strength: 94,
		},
		{
			title: "Java",
			strength: 94,
		},
		{
			title: "REST APIs",
			strength: 92,
		},
		{
			title: "Microservices",
			strength: 85,
		},
		{
			title: "C/C++",
			strength: 88,
		},
		{
			title: "Python",
			strength: 79,
		},
		{
			title: "MongoDB",
			strength: 90,
		},
		{
			title: "Photoshop",
			strength: 79,
		},
	],
};

export default dataset;
