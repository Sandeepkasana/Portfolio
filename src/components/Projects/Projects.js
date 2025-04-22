import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import queen from "../../Assets/Projects/queen.png";
import sorting from "../../Assets/Projects/sorting.png";
import burger from "../../Assets/Projects/burger.png";
import article from "../../Assets/Projects/article.png";
import gotogether from "../../Assets/Projects/gotogether.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gotogether}
              isBlog={false}
              title="GoTogether"
              description="Engineered a feature-rich ride-sharing platform using React.js, Vite, and TailwindCSS, integrating real-time booking, interactive maps with proximity-based matching, user ratings, and notifications to streamline transportation, optimize route selection, and enhance user engagement and experience."
              ghLink="https://github.com/vipulbeniwal01/GoTogether"
              demoLink="https://gotogether-carpool.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burger}
              isBlog={false}
              title="Burger House Website"
              description="The Burger House Website is an interactive and visually appealing site for a burger restaurant, built using HTML, CSS, and JavaScript. It features smooth scroll animations with ScrollReveal, enhancing user experience and showcasing the restaurant’s menu and services effectively."
              ghLink="https://github.com/vipulbeniwal01/BURGER-HOUSE-WEBSITE"
              demoLink="https://vipulbeniwal01.github.io/BURGER-HOUSE-WEBSITE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queen}
              isBlog={false}
              title="N Queen Visualiser"
              description="The N-Queen Visualizer is a project that visually demonstrates the solution to the N-Queen problem, where N queens are placed on an N×N chessboard without threatening each other. Built using HTML, CSS, and JavaScript, it provides a dynamic, step-by-step visualization of the algorithm solving the puzzle."
              ghLink="https://github.com/vipulbeniwal01/N-Queen-Visualiser"
              demoLink="https://vipulbeniwal01.github.io/N-Queen-Visualiser/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visulizer"
              description="Sorting Algorithm Visualizer A web application built using HTML, CSS, and JavaScript to visualize classic sorting algorithms such as Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort. This live-sorting visualizer helps in understanding how different sorting algorithms work."
              ghLink="https://github.com/vipulbeniwal01/Sorting-Visualizer"
              demoLink="https://vipulbeniwal01.github.io/Sorting-Visualizer/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
