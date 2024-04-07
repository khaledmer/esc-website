import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../images/usthb-logo.png";

function infotech() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Information Technology
            </h1>
          </Col>
          <Col>
           <p>Responsible for Technology and networking</p>
          </Col>
          <Col>
           <p>Department Lead: Mouna</p>
          </Col>
          <d />
          <Col>
           <p>Department Tasks: 
            <li>Creating & maintaining websites and apps</li>
            <li>Moding discord</li>
            <li>Fixing cybersecurity issues</li>
            <li>guarding ESC's online presence</li>
           </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default infotech;