import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple"> Sandeep Singh </span> from <span className="purple"> Rajasthan</span> ,<span className="purple">India </span> , currently pursuing a <span className="purple"> Bachelor’s degree in Computer Science</span>Bachelor’s degree in Computer Science at <span className="purple">Lovely Professional University. </span>
            <br />
            <br />
            I’m passionate about building modern, scalable web applications and enjoy solving real-world problems through technology. My focus lies in full-stack development, with a growing interest in data visualization and backend engineering. I believe in writing clean, efficient code and continuously strive to expand my technical skill set.
            <br />
            <br />
            Below are some of the key technologies and tools I work with:
            </p>
            <br />
            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Sandeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
