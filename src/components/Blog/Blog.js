import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";
import Msib from "../../Assets/Projects/Blog-MSIB.png";

function Blog() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My latest <strong className="yellow">Blog Posts </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few articles I have recently written.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={Msib}
              isBlog={false}
              title="Menggali Passion UX Design melalui MBKM Studi Independent di Binar Academy"
              description="Saya ingin berbagi pengalaman menarik saya selama mengikuti MBKM Studi Independent di Binar Academy. Cerita ini dimulai ketika saya mendapatkan informasi tentang program Kampus Merdeka yang menawarkan konversi 20 SKS. "
              mediumLink="https://medium.com/@fauziahreza123/menggali-passion-ux-design-melalui-mbkm-studi-independent-di-binar-academy-c49f29684f64"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
