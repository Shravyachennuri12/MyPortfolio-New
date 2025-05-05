import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shravya Chennuru</span> from{" "}
            <span className="purple">Hyderabad, Telangana.</span>
            <br />
            I am currently working as an <span className="purple">Associate Software Engineer</span> at{" "}
            <span className="purple">Basel Dynamic Tech Solutions Pvt. Ltd.</span>
            <br />
            I pursued my B.Tech in Computer Science and Engineering.
            <br />
            <br />
            My professional skill set includes:
            <br />
            <span className="purple">HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and C++.</span>
            <br />
            <br />
            Tools I use regularly:
            <br />
            <span className="purple">VS Code, GitHub, Render, Postman, Netlify and Vercel.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching documentaries and tech videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and stay curious!"{" "}
          </p>
          <footer className="blockquote-footer">Shravya Chennuru</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
