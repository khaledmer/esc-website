import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../images/usthb-logo.png";

function human() {
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
              Human Resources
            </h1>
          </Col>
          <Col>
           <p>Responsible for Human Resources and internal relations</p>
          </Col>
          <Col>
           <p>Department Lead: Nesrine</p>
          </Col>
          <d />
          <Col>
           <p>Department Tasks: 
            <li>Organizing databases and forms</li>
            <li>Organizing emails and communicating with members</li>
            <li>Making sure the club regulations are respected</li>
            <li>modding means of communication</li>
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

export default human;