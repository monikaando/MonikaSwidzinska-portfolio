import React from "react";
import Box2 from "../layout/Box2";
import "../styles/About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box2>
    <div className="container">
      <div className="about">  
        <h3>Career</h3>
        <p>
          I am a{" "}
          <a
            href="https://pxlwidgets-heroes.com/hero/monika-swidzinska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERO{" "}
          </a>
          in{" "}
          <a
            href="https://pxlwidgets-heroes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PXL.Widgets Heroes
          </a>
          !
        </p>
        <p>
          I am alumni of Web Development{" "}
          <a
            href="https://www.ironhack.com/en/web-development/amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ironhack
          </a>{" "}
          Bootcamp in Amsterdam. It was time when I did a lot of coding
          exercises, and 3 bigger projects (you can see them in{" "}
          <Link to="/projects">projects</Link> on this website).
        </p>
        <p>
          I learned then how to work in a team. I made two projects together
          with my colleague. One of them won the contest for the best project.
          <br />
          During 9 weeks of intensive course I discovered that I like coding
          more that I thought. It was a really nice beginning of my career
          change.
        </p>

        <p>
          After the bootcamp I was a Teacher Assistant at IronHack school for
          the next two groups of students. Every day I was helping them with
          their coding problems, questions, I was checking and grading their
          exercises, projects and I was guiding them how to wrote the most
          proper code.
        </p>
        <p>
          Besides that, I was working as a marketing specialist. I have{" "}
          <b>extensive marketing knowledge</b> (SEO, e-mail marketing, marketing
          automation, social media marketing, affiliation marketing, graphic
          design).
        </p>
        <p>
          After years in this field, I decided to change my career path because
          I discovered that coding is my true passion.
        </p>
        <br />
       
          <div className="hobby_img row">
          <div className="col-md-6">
            <h3>Personal life</h3>
            <ul>
              <li>I am climbing (bouldering)</li>
              <li>I am collecting plants</li>
              <li>I am sewing</li>
              <li>I am a petsitter</li>
              <li>I am building websites for friends</li>
              <li>On sunny days I am admiring <br/>the Earth from a Cessna 172</li>
            </ul>
            </div>
            <img className="col-md-6"
              src="https://res.cloudinary.com/mokaweb/image/upload/v1601546052/MokaWeb-icons/bouldering.png"
              alt="Monika-Swidzinska_bouldering"
            />
          </div>
        </div>
      </div>
    </Box2>
  );
};

export default About;
