import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace these with actual images or placeholders
import makeupApiImg from "../../Assets/Projects/makeupapi.png";
import ecommerceImg from "../../Assets/Projects/ecommerce.png";
import authFileMgmtImg from "../../Assets/Projects/authfile.png";
import bragniYachtImg from "../../Assets/Projects/bragniyacht.png";
import Automobile from "../../Assets/Projects/Automobile.png";
import techProfImg from "../../Assets/Projects/techprof.png";
import polishPallateImg from "../../Assets/Projects/polishpallate.png";
import loopStudiosImg from "../../Assets/Projects/loopstudios.png";
import fakeApiImg from "../../Assets/Projects/fakeapi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few selected projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeupApiImg}
              isBlog={false}
              title="MakeupAPI Website"
              description="Created a dynamic product information page using React Router for smooth navigation. Implemented search and filter features for users to explore products by categories, brands, and types."
              ghLink="https://github.com/Shravyachennuri12/MakeupAPI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="Ecommerce Website"
              description="React-based e-commerce site with product listings, user authentication, and a Node/Express backend."
              ghLink="https://github.com/Shravyachennuri12/FullstackEcommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authFileMgmtImg}
              isBlog={false}
              title="Authentication & File Management"
              description="User login system with drag-and-drop file uploads and dashboard interface."
              ghLink="https://github.com/Shravyachennuri12/Excentricxproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bragniYachtImg}
              isBlog={false}
              title="Ecommerce"
              description="Luxury yacht showcase site built with React featuring gallery and inquiry form."
              ghLink="https://github.com/Shravyachennuri12/BragniYacht-Website-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Automobile}
              isBlog={false}
              title="Automobile Ecommerce"
              description="Sleek automobile booking platform with specs and listings using React and Bootstrap."
              ghLink="https://github.com/Shravyachennuri12/Automobile-Customer---client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techProfImg}
              isBlog={false}
              title="Tech Professionals Portfolio"
              description="Professional services portfolio with team showcase and contact form using React."
              ghLink="https://github.com/Shravyachennuri12/Techprofessionals-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polishPallateImg}
              isBlog={false}
              title="Polish Pallate"
              description="Salon website with service listings and booking features using React."
              ghLink="https://github.com/Shravyachennuri12/PolishPallate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loopStudiosImg}
              isBlog={false}
              title="Loop Studios Main Page"
              description="Modern landing page clone with animation and scroll-based effects. Built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Shravyachennuri12/Loop-Studios-Loading-Main-Page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakeApiImg}
              isBlog={false}
              title="Fake API Website"
              description="Frontend college website using React and json-server for mock data. Sections include academics, alumni, and admissions."
              ghLink="https://github.com/Shravyachennuri12/FakeApi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
