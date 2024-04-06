import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../images/usthb-logo.png";
import {Link} from "react-router-dom";

function departments() {
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
              Departments
            </h1>
          </Col>
          <d />
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/infotech" > Information Technology</Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/external" > External Relations</Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/human" > Human Resources</Link>
            </h2>
          </Col>
          <d />
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/teaching" > Teaching </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/echo" > Echo Podcast </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/comm" > Communication </Link>
            </h2>
          </Col>
          <d />
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/multi" > Multimedia </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/marketing"> Marketing </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/sp" > Strategic Planning </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/log" > Logistics Management </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="departments//design" >Design </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/mag" > Magazine </Link>
            </h2>
          </Col>
          <Col
          style={{
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          >
            <h2>
              <Link to="/departments/dg" > Discussion Group </Link>
            </h2>
          </Col>
          <d />
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

export default departments;