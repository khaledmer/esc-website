import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Particle from "../Particle";
import laptopImg from "../../images/usthb-logo.png";
import {Link} from "react-router-dom";

function Departments() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

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
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/human" onClick={() => updateExpanded(false)}>
                 <h2> Human Resources </h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/teaching" onClick={() => updateExpanded(false)}>
                 <h2>Teaching</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/echo" onClick={() => updateExpanded(false)}>
                 <h2>Echo Podcast</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/comm" onClick={() => updateExpanded(false)}>
                 <h2>Communication</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/multi" onClick={() => updateExpanded(false)}>
                 <h2>Multimedia</h2>
              </Nav.Link>
            </Nav.Item>
              <Nav.Item>
              <Nav.Link as={Link} to="/departments/marketing" onClick={() => updateExpanded(false)}>
                 <h2>Marketing</h2>
              </Nav.Link>
           </Nav.Item>
              <Nav.Item>
              <Nav.Link as={Link} to="/departments/sp" onClick={() => updateExpanded(false)}>
                 <h2>Strategic Planning</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/log" onClick={() => updateExpanded(false)}>
                 <h2>Logistics Managment</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/design" onClick={() => updateExpanded(false)}>
                 <h2>Design</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/mag" onClick={() => updateExpanded(false)}>
                <h2>Magazine</h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/departments/dg" onClick={() => updateExpanded(false)}>
                 <h2>Discussion Group</h2>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
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

export default Departments;