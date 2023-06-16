import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillBehanceSquare,
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "48px", fontWeight: "800" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a passion for 
              <i>
                <b className="yellow"> UI/UX and programming. </b>
              </i>
              <br />
              <br />
                When it comes to programming, I am particularly interested &nbsp;
              <i>
                <b className="yellow"> in machine learning</b> 
              </i>
              <br />
              <br />
                As for UI/UX, I am skilled <b className="yellow">in Figma</b> and
              <i>
                <b className="yellow">
                  {" "}
                  proficient in creating designs.
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "48px", fontWeight: "800" }}>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/frezaokta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/fauziahokta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillBehanceSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fauziah-reza-oktaviyani-085a16150/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/okskidoki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dribbble.com/fzhokta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillDribbbleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dribbble.com/fzhokta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle/>
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
