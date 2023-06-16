import React from "react";
import Card from "react-bootstrap/Card";
import { TbArrowBadgeRight}  from "react-icons/tb";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am  <span className="yellow">Fauziah Reza Oktaviyani </span>
            from <span className="yellow">  Surabaya, Indonesia.</span>
            <br />I am currently a student <span className="yellow">of Information Systems at Trunojoyo Madura University.</span>
            <br />
            <br />
            There are several technical skills that I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <TbArrowBadgeRight/> <span className="yellow">Graphic Design: </span>I enjoy creating visually appealing designs and exploring different design concepts.
            </li>
            <li className="about-activity">
              <TbArrowBadgeRight/> <span className="yellow">UI/UX: </span>I have a keen interest in designing user-friendly interfaces and enhancing the user experience.
            </li>
            <li className="about-activity">
              <TbArrowBadgeRight/> <span className="yellow">Programming: </span>Although I am still in the learning process, I am enthusiastic about expanding my programming knowledge and skills.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Lastly, I would like to share a motivational quote from a famous personality:
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful"{" "}
          </p>
          <footer className="blockquote-footer">- Albert Schweitzer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
