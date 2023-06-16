import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  TbBrandFigma,
  TbBrandVisualStudio,
  TbBrandAdobe,
} from "react-icons/tb";

import {SiJupyter} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandFigma />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700"}}>
            Figma
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVisualStudio />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700"}}>
            VS Code
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandAdobe />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700"}}>
            Adobe
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <br />
        <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "700"}}>
            Jupyter
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
