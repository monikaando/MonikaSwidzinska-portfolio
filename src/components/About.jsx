/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Box2 from '../layout/Box2';
import '../styles/About.scss';

const About = () => {
	return (
		<Box2>
			<div className="container">
				<div className="about">
					<h6>
						<strong>
							I am an experienced Frontend Developer(2yrs+), focused on the latest JavaScript stack. I am
							comfortable with both Vue.js and React.js. I like working in an Agile team and creating
							modern solutions for applications and websites.
						</strong>
					</h6>
					<p>
						Leaving my comfort zone in the marketing industry to fulfill my dream: building an international
						career as a Frontend Developer. After successfully graduating from Ironhack Fullstack Web
						Development Bootcamp due to my outstanding performance I was offered an opportunity as a Teacher
						Assistant for the next groups of students.
					</p>
					<p>
						By teaching web development, I have gained a solid understanding of software development in a
						short time. Afterwards, I started working for different companies with a strong focus on the
						frontend.
					</p>
					<p>I enjoy mentoring people, helping them take the first step as a Frontend Developer.</p>
					<p>In my free time, I like bouldering, roller skating, and traveling.</p>
					<p>
						<strong>Tech stack:</strong> JavaScript, Node.js, Vue.js, React.js, Responsive Web Design,
						Bootstrap, CSS, SASS, OOP, HTML, REST APIs, Git, GiHub, MongoDB{' '}
					</p>
					<div>
						<a
							className="hvr-grow"
							href="https://github.com/mswidzinska"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>My GitHub:</strong> github.com/mswidzinska
						</a>
					</div>
					<div>
						<a
							className="hvr-grow"
							href="https://www.linkedin.com/in/monikaswidzinska/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>LinkedIn</strong> linkedin.com/in/monikaswidzinska
						</a>
					</div>
					<div>
						<a
							className="hvr-grow"
							href="mailto:monika.swidzinska.dev@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>You can reach me at:</strong> monika.swidzinska.dev@gmail.com
						</a>
					</div>
				</div>
			</div>
		</Box2>
	);
};

export default About;
