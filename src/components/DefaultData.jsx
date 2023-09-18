import uniqid from 'uniqid'

  function generateDefaultCV() {
	const personalDetails = {
		fullName: "John Smith",
		email: "john.smith@email.com",
		contact: "(123) 456-7890",
		address: "123 Main Street, Cityville, State 12345",
	};

	const education = [
		{
			id: uniqid(),
			institution: "University of Citytown",
			degree: "Bachelor of Science in Computer Science",
			startDate: "September 2015",
			endDate: "May 2019",
			grade: '4.0 GPA'
		},
		// {
		// 	id: uniqid(),
		// 	institution: "Cityville High School",
		// 	degree: "High School Diploma",
		// 	startDate: "September 2011",
		// 	endDate: "June 2015",
		// 	grade: '3.6 GPA'
		// },
	];

	const experience = [
		{
			id: uniqid(),
			company: "TechCorp Solutions",
			post: "Software Engineer",
			startDate: "June 2019",
			endDate: "Present",
			responsibilities:
				"Develop and maintain software applications for clients in various industries." +
				"Collaborate with cross-functional teams to design and implement new features." +
				"Troubleshoot and debug issues to ensure optimal software performance." +
				"Participate in code reviews to ensure code quality and adherence to best practices.",
		},
		// {
		// 	id: uniqid(),
		// 	company: "WebGenius Marketing",
		// 	post: "Digital Marketing Specialist",
		// 	startDate: "January 2018",
		// 	endDate: "May 2019",
		// 	responsibilities:
		// 		"Managed and executed digital marketing campaigns for clients, including social media, email, and SEO strategies." +
		// 		"Conducted market research and analyzed data to optimize campaign performance and ROI." +
		// 		"Created engaging and relevant content for various online platforms." +
		// 		"Monitored and reported on key metrics to clients, providing insights for campaign improvement",
		// },
	];

    const skills = [
        {
            id: uniqid(),
            skillName: "REACT Framework"
        },
        {
            id: uniqid(),
            skillName: "Web Developer"
        }
    ]
	return { personalDetails, education, experience, skills };
}

 export default generateDefaultCV;