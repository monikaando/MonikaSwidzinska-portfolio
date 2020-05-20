import React from "react";
import "../styles/Projects.scss";
import YouTubeVideo from "../thirdParty/YouTube";

const Projects = () => {
  return (
    <div className="projects">
      <h1>IronHack bootcamp projects:</h1>
      <div className="card">
        <YouTubeVideo videoId="sR6eRGJFopg" />
        <div className="card-text">
          <h4>PetSitterApp</h4>
          <p>
            Application for managing a pet sitting business, includes:
            customers, calendar, jobs, income summary.
            <br />
            The third and the final project of Ironhack bootcamp. Winner of
            HackShow 2/2020 in Web development category. The project was created
            in cooperation with my colleague.
          </p>
          <p>Stack: React, Redux, NodeJS, MongoDB, Express, Bulma, HTML</p>
          <p>
            You can see the{" "}
            <a
              href="https://pet-sitter-app.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live version
            </a>{" "}
            and test it using:
            <br />
            Login: test@test.com | password: qwaszx12
          </p>
          <p>
            <a
              href="https://github.com/mswidzinska/PetSittingApp-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <div className="created">
          <p>02/2020</p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="6-SdYQc_kBQ" />
        <div className="card-text">
          <h4>PlayDateApp</h4>
          <p>Database of your kid's friends for tracking their availability.</p>
          <p>
            The second Iron Hack project. The project was created in cooperation
            with my colleague.
          </p>
          <p>Stack: HTML, JS, CSS, NodeJS, Express, MongoDB</p>
          <p>
            {" "}
            You can see the{" "}
            <a
              href="http://play-date-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live version
            </a>{" "}
            and test it using:
            <br />
            Login: test | password: qwaszx
          </p>
          <p>
            <a
              href="https://github.com/mswidzinska/PlayDateApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <div className="created">
          <p>01/2020</p>
        </div>
      </div>

      <div className="card">
        <YouTubeVideo videoId="UilWfBuWXoE" />
        <div className="card-text">
          <h4>Hungry Monkey</h4>
          <p>
            The first Iron Hack project. Game with collision detection. Choose
            your avatar. Collect bananas, avoid coconuts and the snake.
          </p>
          <p>Stack: HTML, JavaScript, CSS</p>
          <p>
            {" "}
            Here, you can see the{" "}
            <a
              href="https://hungry-monkey.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live version
            </a>{" "}
            of the game.
          </p>
          <p>
            <a
              href="https://github.com/mswidzinska/Hungry-Monkey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <div className="created">
          <p>12/2019</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
