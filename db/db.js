export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"안녕하세요. This is Olivia Lee. ",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: teiru754@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "English",
			color: "1",
			percentage: "70",
		},
		{
			title: "Software",
			skillName: "Python, HTML, MarkDown",
			color: "6",
			percentage: "50",
		},
		{
			title: "Documents",
			skillName: "Word, EXCEL, PPT",
			color: "2",
			percentage: "70",
		},
		{
			title: "QA Tools",
			skillName: "JIRA, Jenkins, SVN, SQL",
			color: "3",
			percentage: "50",
		},
		{
			title: "Design",
			skillName: "MAX, Maya, Photoshop, Premiere, AfterEffect",
			color: "4",
			percentage: "60",
		},
	],
	projects: {
		web: [
			{
				projectName: "TC",
				image: "/images/fds.jpg",
				summary:
					"Game Launcher and Downloading Flow Test Case.",
				preview: "../posts/QA-Projects.md",
				techStack: [
					"QA",
					"TC",
					"Confluence",
				],
			},
			{
				projectName: "Game Analysis",
				image: "images/findyourbank.png",
				summary:
					"Game Analyzes",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Analysis", "Game Contents"],
			},
			{
				projectName: "Proposal",
				image: "images/portfolio.png",
				summary:
					"Proposals that used to propose new tools, contents, etc.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["Game", "Proposal", "DevTool"],
			},
			{
				projectName: "Other",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "NPIXEL",
			duration: "December 2021 - Present",
			subtitle: "Game QA",
			details: [
				"Working as a Develop-QA."
			],
			tags: [
				"Jira",
				"SVN",
				"Jenkins",
			],
			icon: "heartbeat",
		},
		{
			title: "Golfzon Networks",
			duration: "October 2020 - July 2021",
			subtitle: "Software QA",
			details: [
				"Software QA Engineer that handle BTS and entire develop process.",
			],
			tags: [
				"Python",
				"ALM/BTS",
				"SVN",,
			],
			icon: "qrcode",
		},
	],
	education: [
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "",
			subtitle: "National Institute of Technology, Warangal",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "Board of Secondary Education, Rajasthan",
			details: [
				"Qualified JEE Advanced, Main & BITSAT.",
				"Secured 99.5 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/%EB%B3%B4%EC%9D%B8-%EC%9D%B4-502771251/",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
