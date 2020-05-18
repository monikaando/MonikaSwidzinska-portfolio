import React from "react";
// import { Link } from "react-router-dom";
import { CardDeck, Card } from "react-bootstrap";
import "../styles/Projects.scss";
import YouTubeVideo from "../thirdParty/YouTube";

const Projects = () => {
  return (
    <CardDeck>
      <Card>
        <YouTubeVideo videoId="sR6eRGJFopg" />
        <Card.Body>
          <Card.Title>PetSitterApp</Card.Title>
          <Card.Text>
            Application for managing a pet sitting business, includes:
            customers, calendar, jobs, income summary. The third and the final
            project of Ironhack bootcamp. Winner of HackShow 2/2020 in Web
            development category.
          </Card.Text>
          <Card.Text>
            Stack: React, Redux, NodeJS, MongoDB, Express, Bulma, HTML
          </Card.Text>
          <Card.Text>
            The project was created in cooperation with my colleague.
          </Card.Text>
          <Card.Text>You can see the live version and test it here: </Card.Text>
          <Card.Text>https://pet-sitter-app.netlify.com/</Card.Text>
          <Card.Text>Login: test@test.com | password: qwaszx12</Card.Text>
          <Card.Text>
            <a
              href="https://github.com/mswidzinska/PetSittingApp-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Created 02.2020</small>
        </Card.Footer>
      </Card>
      <Card>
        <YouTubeVideo videoId="6-SdYQc_kBQ" />
        <Card.Body>
          <Card.Title>PlayDateApp</Card.Title>
          <Card.Text>
            Database of your kid's friends for tracking their availability. The
            second Iron Hack project.
          </Card.Text>
          <Card.Text>Stack: HTML, JS, CSS, NodeJS, Express, MongoDB</Card.Text>
          <Card.Text>
            The project was created in cooperation with my colleague.
          </Card.Text>
          <Card.Text>You can see the live version and test it here: </Card.Text>
          <Card.Text>http://play-date-app.herokuapp.com/</Card.Text>
          <Card.Text>Login: test | password: qwaszx</Card.Text>
          <Card.Text>
            <a
              href="https://github.com/mswidzinska/PlayDateApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <YouTubeVideo videoId="UilWfBuWXoE" />
        <Card.Body>
          <Card.Title>Hungry Monkey</Card.Title>
          <Card.Text>The first Iron Hack project.</Card.Text>
          <Card.Text>Game with collision detection</Card.Text>
          <Card.Text>Stack: HTML, JavaScript, CSS</Card.Text>
          <Card.Text>You can see the live version here: </Card.Text>
          <Card.Text>https://hungry-monkey.herokuapp.com/</Card.Text>
          <Card.Text>
            <a
              href="https://github.com/mswidzinska/Hungry-Monkey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Projects;
