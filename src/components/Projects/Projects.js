import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chuffin from "../../Assets/Projects/Project-chuffin.png";
import ndakuy from "../../Assets/Projects/Project-ndakuy.png";
import drug from "../../Assets/Projects/Project-drug.png";
import plantbot from "../../Assets/Projects/Project-plantbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My latest <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few works I've recently completed.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chuffin}
              isBlog={false}
              title="Chuffin Cake n Bakery"
              description="Chuffin Cake n Bakery is a renowned bakery that offers a wide selection of cakes and pastries, attracting numerous customers who appreciate its commitment to maintaining exceptional taste and quality."
              behanceLink="https://www.behance.net/gallery/140835233/Product-Design-Planning-_-Chuffin-Cake"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ndakuy}
              isBlog={false}
              title="Ndakuy Mobile n Website"
              description="Ndakuy is a companion app for hikers that offers features such as mountain booking, homestay rentals, articles, and gamification, aiming to enhance the hiking experience by providing convenience and engaging elements."
              behanceLink="https://www.behance.net/gallery/173202023/Ndakuy-Study-Case"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drug}
              isBlog={false}
              title="Drugs Classification with Random Forest"
              description="My college project involves drug classification using the Random Forest method to develop a predictive model for classifying different types of drugs based on specific features."
              githubLink="https://github.com/fauziahreza/Drug-Classification-with-Random-Forest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantbot}
              isBlog={false}
              title="Plant Bot Mobile Application"
              description="PlantBot Mobile is a college project that aims to create a companion application for gardening enthusiasts, providing features such as scheduling, tips, and articles to enhance their planting experience."
              githubLink="https://github.com/fauziahreza/PlantBot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
