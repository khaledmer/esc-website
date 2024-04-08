import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../images/events_esc.jpg";

function com() {
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
              Communication management 
            </h1>
          </Col>
          <Col>
           <p>Communicatoin department is responsible in manafing and handling communications, involving in various activities such as engaging with the cimmmunity, social media, events and content creation. </p>
          </Col>
          <Col>
           <p>Department Lead: Fedwa Mezghiche</p>
          </Col>
          <d />
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

export default com;
