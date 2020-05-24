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
      </div>
      <h1>Other projects:</h1>
      <div className="card">
        <YouTubeVideo videoId="wMFKSYX0prQ" />
        <div className="card-text">
          <h4>Soraya Schultz - Mindset Coach Utrecht</h4>
          <p>Website built with Wordpress and Ultra Themify template.</p>
          <p>Stack: Wordpress, CSS, HTML </p>
          <p>
            <a
              href="https://sorayaschultz.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sorayaschultz.nl
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="ASt1TVXXtIA" />
        <div className="card-text">
          <h4>TapApp</h4>
          <p>
            Application uses BreweryDB's API to search breweries by country and
            beers by name, type and country.
          </p>
          <p>Stack: React, SASS, HTML </p>
          <p>
            <a
              href="https://github.com/mswidzinska/BreweryDB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="ONEjL4bPJmA" />
        <div className="card-text">
          <h4>Blog Api</h4>
          <p>
            Application uses API to send form's data to the database and then
            shows blog posts from this database.
          </p>
          <p>Stack: React, SASS, HTML, API </p>
          <p>
            <a
              href="https://github.com/mswidzinska/BlogAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="WwiFXxV1ydw" />
        <div className="card-text">
          <h4>Iron Beers</h4>
          <p>
            Application uses API to show the list of beers, random beer, beer's
            details and allow to create a new beer.
          </p>
          <p>Stack: React, Bulma, HTML, API </p>
          <p>
            <a
              href="https://github.com/mswidzinska/lab-react-ironbeers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="nMWnO1S3KwU" />
        <div className="card-text">
          <h4>Wiki Countries</h4>
          <p>
            Application uses API to show the list of countries, their name,
            capital, area and borders with another countries.
          </p>
          <p>Stack: React, Bootstrap, HTML, API </p>
          <p>
            <a
              href="https://github.com/mswidzinska/lab-wiki-countries"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
      <div className="card">
        <YouTubeVideo videoId="u5aPGrda-c0" />
        <div className="card-text">
          <h4>Recipes & Cooks</h4>
          <p>
            Application with recipes. It is possible to see list of recipes,
            detail page of recipe, delete, update recipes and create own recipe.
          </p>
          <p>Stack: NodeJS, ExpressJS, CSS, HTML </p>
          <p>
            <a
              href="https://github.com/mswidzinska/lab-recipes-cooks-relations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
