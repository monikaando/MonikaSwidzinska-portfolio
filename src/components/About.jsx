/* eslint-disable jsx-a11y/accessible-emoji */
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
            <b>
              The story how I become a Front End Developer (2 years experience
              already ) <br />
              with an extensive marketing knowledge (8 years experience).
            </b>
          </p>
          <p>
            My coding adventure started with <b>playing with HTML and CSS during my
            career as a marketing specialist</b>. I always was the most technical
            person in the office. If there was any assignment which required
            coding, I was more than happy to do it.
          </p>
          <p>
            During my marketing career I was creating websites in CMS, building
            and editing newsletter or landing pages using CSS and HTML. I also
            was doing a lot of graphic designs, SEO, e-mail marketing, marketing
            automation, social media marketing, offline marketing and
            affiliation marketing.
          </p>
          <p>
            <b>Every year I was coding more and more</b>, but it wasn't enough for me.
            I decided to start learning more by myself during commuting to the
            work, evenings and weekends. I liked it to this point that I started
            thinking about a career change. One day I quit my job as a marketing
            specialist and I started <b>selflearning</b> at home and meanewhile studing
            I've build two Wordpress websites for a Life Coach. Learning by
            myself was challenging and difficult. I felt that I need guidance
            and someone who can verify my code.
          </p>
          <p>
            <b>I decided to go to the coding school.</b> On the begining I was a bit
            sceptical: "So much money, so intensive 10 week course, is that
            worth it? Which school I should choose?" Today I can truly say that
            going to IronHack school was the best choice of my career life! I totally
            found myself there! This course was a very important step for me.
            I decided to put all my strength, time and ambitions to do my best.
          </p>
          <p>
            <b>I was coding at school, in trains, in the evenings and even during
            weekends (8h-14h per day).</b> I was super tired, but happy to see how
            big progress I was making. It was worth it! I was working
            independently, but also often in a team with my colleague. We
            created two big apps together. <b>Our final app won the Ironhack
            Contest (HackShow 2/2020).</b>
          </p>
          <p>
            During the whole course I had a big support from the school on every
            possible level (Thank you!) Thanks to IronHack I've met amazing
            people during my classes and networking meetings with other
            students, developers and companies.
          </p>
          <p>
            After 10 weeks of course I couldn't imagine that this is the end,
            that I will leave this school. I was very sad. I loved this place! I
            was super happy when they told me that they want to hire me as a {" "}
            <b>Teacher Assistant for the next students</b>. I was working with them for
            another 2 courses. I was happy to help students wit their coding
            problems but also I gave them motivation and strength to continue
            when they had a bad coding day or even wanted to give up and quit.
          </p>
          <p>
            Since I quit my Marketing job (04.2019) till I finished IronHack
            course for 3rd time (07.2020) it passed 15 months. During this
            time I created couple of amazing applications, websites, I did more
            than 200 exericeses. During this time I learn bunch of new 
            technologies (<a
          href="https://res.cloudinary.com/mokaweb/image/upload/v1602155964/MokaWeb-CV/Monika_Swidzinska_Front_End_Developer_CV_sjstms.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          more in my CV
        </a>) like:
          </p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Responsive Web Design</li>
            <li>Bootstrap / React Bootstrap / Bulma</li>
            <li>Sass / CSS</li>
            <li>HTML</li>
            <li>object-oriented programming</li>
            <li>Git and GitHub & Version Control</li>
            <li>Wordpress</li>
          </ul>
          <p>
            The work as the Teacher Assistant helped me <b>polish my soft skills</b> and learned how to <b>share my coding knowledge</b>.
          </p>
          <p>
            On 07.2020 I was hired by{" "}
            <a
              href="https://pxlwidgets-heroes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PXL.Widgets Heroes
            </a>
            , where on the beginning I was proffessionally trained in new frameworks, libraries and tools. I can work in various teams, with experts and
            I also could add new knowledge to my skills set:
          </p>
          <ul>
            <li>Angular</li>
            <li>IONIC </li>
            <li>TypeScript</li>
            <li>RxJS</li>
            <li>BEM</li>
            <li>Unit Testing</li>
            <li>Jasmine / Karma</li>
            <li>GitLab</li>
            <li>Agile</li>
          </ul>
          <br />
          <div className="hobby_img row">
            <div className="col-md-6 mt-5">
              <h3>Personal life</h3>
              <ul>
                <li>I am climbing (bouldering)</li>
                <li>I am collecting plants</li>
                <li>I am sewing</li>
                <li>I am a petsitter</li>
                <li>I am building websites for friends</li>
                <li>
                  On sunny days I am admiring <br />
                  the Earth from a Cessna 172
                </li>
              </ul>
            </div>
            <img
              className="col-md-6"
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
