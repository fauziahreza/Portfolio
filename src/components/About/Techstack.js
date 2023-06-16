import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  TbUxCircle,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandGit,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbUxCircle />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>
            UI/UX
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandHtml5 />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>
            HTML
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandJavascript />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>
            JavaScript
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandPython />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>
            Python
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGit />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>
            Git
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
