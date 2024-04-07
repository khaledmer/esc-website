import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../images/usthb-logo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Take a look at our Activities</h1>
            <p className="home-about-body">
              add cards to showcase activities like shown in the design prototype
              <br />
              <br />
              add a centered button here that's linked to the activities page
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to contact us on:
              <br />
              add buttons to socials
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
