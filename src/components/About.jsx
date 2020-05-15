import React from "react";
import Box from "../layout/Box";
import "../styles/About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      <div className="about">
        <h3>Career</h3>
        <p>
          I am alumni of Web Development{" "}
          <a href="https://www.ironhack.com/en/web-development/amsterdam">
            Ironhack
          </a>{" "}
          Bootcamp in Amsterdam , where in 9 weeks I learned:
        </p>
        <ul>
          <li>HTML5, CSS3, Responsive Web Design</li>
          <li>Bootstrap, Bulma, Sass</li>
          <li>JavaScript, ReactJS, Express.js, NodeJS, MongoDB</li>
          <li>object-oriented programming</li>
          <li>Git and GitHub & Version Control </li>
        </ul>
        <p>
          During the bootcamp I've build 3 projects (you can see them in{" "}
          <Link to="/projects">projects</Link> on this website)
        </p>
        <p>
          Besides that, I have <b>extensive marketing knowledge</b> (SEO, e-mail
          marketing, marketing automation, social media marketing, affiliation
          marketing, graphic design).
        </p>
        <p>
          After years in this field, I decided to change my carer path because I
          discovered that coding is my true passion.
        </p>
        <p>
          Everyday I am learning something new, making projects, practising and
          develop my knowledge.
        </p>
        <p>
          Right now IronHack school in Amsterdam hired me as a Teacher Assistant
          for Web Development Bootcamp. After I finish classes with my lovely
          students, where I help them with their coding problems, questions,
          checking and grading their exercises and projects, I am open for a new
          challenges and new job opportunities.
        </p>
        <h3>Perfonal life</h3>
        <ul>
          <li>I am climbing (bouldering)</li>
          <li>I am collecting plants</li>
          <li>I am sewing</li>
          <li>I am a petsitter</li>
          <li>I am building websites for friends</li>
          <li>In sunny days I am admiring the Earth from Cessna 172</li>
        </ul>
      </div>
    </Box>
  );
};

export default About;
