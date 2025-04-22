import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PersonalPicture.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a <i><b className="purple"> B.Tech CSE </b></i> student with a strong foundation in <i><b className="purple"> full-stack development </b></i>,<i><b className="purple"> problem-solving </b></i> , and <i><b className="purple">  data visualization</b></i>. Passionate about building impactful web applications using <i><b className="purple"> React </b></i>, <i><b className="purple"> Node.js </b></i>, and <i><b className="purple"> MongoDB </b></i>. I enjoy solving real-world problems through code and have hands-on experience with tools like <i><b className="purple"> Tableau </b></i>, <i><b className="purple"> GitHub </b></i>, and <i><b className="purple"> Blender </b></i>. Always eager to <i><b className="purple"> learn </b></i>, <i><b className="purple"> adapt </b></i>, and <i><b className="purple"> grow </b></i> in the tech space.
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  borderRadius: "50%",
                  border: "0.2rem solid var(--imp-text-color)",
                  width: "70%",
                  marginTop: "-15px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sandeepkasana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/sandeep___kasana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    style={{
                      width: "30px",
                      height: "30px",
                      filter: "invert(41%) sepia(77%) saturate(3057%) hue-rotate(245deg) brightness(88%) contrast(95%)",
                    }}
                  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Sandeep-Singh26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.comsandeep_kasana26/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;