import React, { Component } from "react";
import "../styles/Projects.scss";
import YouTubeVideo from "../thirdParty/YouTube";
import Card from "react-bootstrap/Card";
import data from "./data/data.json";

const projects = data.map((data) => {
  return (
    <Card key={data.id} className="container mt-4 p-0">
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
          {data.test ? (
            <div className="d-flex">
              <p>
                <b>Login:</b> {data.test.login}
              </p>
              <p className="ml-5">
                <b>Password:</b> {data.test.password}
              </p>
            </div>
          ) : null}
          {data.live_version ? (
            <a
              className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
              href={data.live_version.link}
              target="_blank"
              rel=" noopener noreferrer"
            >
              Website
            </a>
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
      <div className="m-md-5 pl-md-5 pl-xl-0 pr-md-5 pb-md-5">{projects}</div>
    );
  }
}
