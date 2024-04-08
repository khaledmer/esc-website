import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../images/usthb-logo.png";

function dg() {
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
              Discussiom Group
            </h1>
          </Col>
                 <Col>
           <p>A department responsible of hosting discussion groups (DGs) which are online or physical meetings 
where people meet and get to share 
their opinion about a given topic in English. They focus on two core skills for learning English: Listening and speaking, their main purposes are: </p>
<p> &#9733; Promote the use of English,
 and the sense of debate and discussion.</p>
<p> &#9733;Express thoughts and opinions.</p>
<p> Share, ask and answer questions.</p>
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

export default dg;
