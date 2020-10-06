import React, { Component } from "react";
import "../styles/Projects.scss";
import YouTubeVideo from "../thirdParty/YouTube";
import Card from "react-bootstrap/Card";
import data from "./data/data.json";

const projects = data.map((data) => {
  return (
    <Card key={data.id} className="container mr-md-4 mt-4 p-0">
      <Card.Body className="row d-flex justify-content-between align-items-center m-0 p-0">
        <div className="video col-lg-4 no-l-pad mr-2 text-center">
          <YouTubeVideo videoId={data.videoId} />
        </div>
        <div className="col-lg-6 ml-md-5 p-3 pr-2 pr-0">
          <Card.Title>
            <b>{data.title}</b>
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
          {data.description2 ? (
            <Card.Text>{data.description2}</Card.Text>
          ) : null}
          <Card.Text className="pb-3">
            <b>Stack:</b> {data.stack}
          </Card.Text>
          {data.live_version ? (
            <React.Fragment>
              <div className="d-flex">
                <p>
                  <b>Login:</b> {data.live_version.login}
                </p>
                <p className="ml-5">
                  <b>Password:</b> {data.live_version.password}
                </p>
              </div>
              <a
                className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
                href={data.live_version.link}
                target="_blank"
                rel=" noopener noreferrer"
              >
                Website
              </a>
            </React.Fragment>
          ) : null}

          <a
            className="btn-info pt-1 pb-1 pl-2 pr-2"
            href={data.github}
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </div>
      </Card.Body>
    </Card>
  );
});
export default class Projects extends Component {
  render() {
    return (
      <div className="m-md-5 pl-md-5 pr-md-5 pb-md-5">
        <h1>My projects:</h1>
        {projects}
      </div>
    );
  }
}
//<CardColumns className=" m-3 p-3 ">  {projects} </CardColumns>

// const Projects = () => {
//   return (
//     <div className="projects container">
//       <h1 className="row">My projects:</h1>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="FQYy_yPY5Y4" />
//         </div>
//         <div className="text col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>FizzyBuzz Game - Mobile App - IONIC</h4>
//           <p>
//             FizzyBuzz Game as a Mobile App (based on Fizz Buzz Game as a
//             responsive website).
//           </p>
//           <p>
//             <b>Stack:</b> IONIC, Angular, TypeScript, RxJS, SASS, HTML
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/FizzBuzz-MobileGame-IONIC"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>

//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="ceyOipgvLQ8" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Fizz Buzz Game - Angular</h4>
//           <p>Fizz Buzz Game as a responsive website.</p>
//           <p>
//             <b>Stack:</b> Angular, TypeScript, RxJS, SASS, HTML
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/FizzBuzz-DesktopGame/tree/block2_part2_monika/FizzBuzzGame"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>

//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="lrjsvRbPDzM" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>BeerApp - Angular</h4>
//           <p>
//             Application uses BreweryDB's API to search breweries by country and
//             name and to search beers by name, type and country.
//           </p>
//           <p>Variation of the previous project "TapApp - React"</p>
//           <p>
//             <b>Stack:</b> Angular, TypeScript, NodeJS, SASS, HTML
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/BeerApp-Angular"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="sR6eRGJFopg" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>PetSitterApp</h4>
//           <p>
//             Application for managing a pet sitting business, includes:
//             customers, calendar, jobs, income summary. The the final IronHack project. Winner of HackShow 2/2020. Created together with my
//             colleague.
//           </p>
//           <p>
//             <b>Stack:</b> React, Redux, NodeJS, MongoDB, Express, Bulma, HTML
//           </p>
//           <p>
//             You can see the{" "}
//             <a
//               href="https://pet-sitter-app.netlify.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               live version
//             </a>{" "}
//             and test it using:
//             <br />
//             Login: test@test.com | password: qwaszx12
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/PetSittingApp-client"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="6-SdYQc_kBQ" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>PlayDateApp</h4>
//           <p>Database of your kid's friends for tracking their availability.</p>
//           <p>
//             Iron Hack project. Created together with my colleague.
//           </p>
//           <p>
//             <b>Stack:</b> NodeJS, Express, MongoDB, JS, CSS, HTML
//           </p>
//           <p>
//             {" "}
//             You can see the{" "}
//             <a
//               href="http://play-date-app.herokuapp.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               live version
//             </a>{" "}
//             and test it using:
//             <br />
//             Login: test | password: qwaszx
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/PlayDateApp"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="UilWfBuWXoE" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Hungry Monkey</h4>
//           <p>
//             Iron Hack project. Game with collision detection. Choose
//             your avatar. Collect bananas, avoid coconuts and the snake.
//           </p>
//           <p>
//             <b>Stack:</b> JavaScript, CSS, HTML
//           </p>
//           <p>
//             {" "}
//             Here, you can see the{" "}
//             <a
//               href="https://hungry-monkey.herokuapp.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               live version
//             </a>{" "}
//             of the game.
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/Hungry-Monkey"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="wMFKSYX0prQ" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Soraya Schultz - Mindset Coach Utrecht</h4>
//           <p>Website built with Wordpress and Ultra Themify template.</p>
//           <p>
//             <b>Stack:</b> Wordpress, CSS, HTML{" "}
//           </p>
//           <p>
//             <a
//               href="https://sorayaschultz.nl/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               sorayaschultz.nl
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="ASt1TVXXtIA" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>TapApp - React</h4>
//           <p>
//             Application uses BreweryDB's API to search breweries by country and
//             beers by name, type and country.
//           </p>
//           <p>
//             <b>Stack:</b> React, SASS, HTML{" "}
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/BreweryDB"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="ONEjL4bPJmA" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Blog Api</h4>
//           <p>
//             Application uses API to send form's data to the database and then
//             shows blog posts from this database.
//           </p>
//           <p>
//             <b>Stack:</b> React, SASS, HTML, API{" "}
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/BlogAPI"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="WwiFXxV1ydw" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Iron Beers</h4>
//           <p>
//             Application uses API to show the list of beers, random beer, beer's
//             details and allow to create a new beer.
//           </p>
//           <p>
//             <b>Stack:</b> React, Bulma, HTML, API{" "}
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/lab-react-ironbeers"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="nMWnO1S3KwU" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Wiki Countries</h4>
//           <p>
//             Application uses API to show the list of countries, their name,
//             capital, area and borders with another countries.
//           </p>
//           <p>
//             <b>Stack:</b> React, Bootstrap, HTML, API{" "}
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/lab-wiki-countries"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="box row d-flex justify-content-between align-items-center">
//         <div className="video col-lg-4 no-l-pad mr-2 text-center">
//           <YouTubeVideo videoId="u5aPGrda-c0" />
//         </div>
//         <div className="col-sm-11 offset-sm-1 col-lg-6 no-l-pad pr-4">
//           <h4>Recipes & Cooks</h4>
//           <p>
//             Application with recipes. It is possible to see list of recipes,
//             detail page of recipe, delete, update recipes and create own recipe.
//           </p>
//           <p>
//             <b>Stack:</b> NodeJS, ExpressJS, CSS, HTML{" "}
//           </p>
//           <p>
//             <a
//               href="https://github.com/mswidzinska/lab-recipes-cooks-relations"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
