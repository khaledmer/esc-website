import React from "react";
import Card from "react-bootstrap/Card";
import hocImg from "../../images/hoc.jpg";
import azhImg from "../../images/azh.jpg";
import hndImg from "../../images/hnd.jpg";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className="BMs">
            <img src={hocImg} alt="about" className="img-abt" />
            <div className="des">
             <h1>The president </h1>
             <p>El-Houcine Kerroum</p>
            </div>
          </div>
          <div className="BMs">
           <img src={azhImg} alt="about" className="img-abt" />
           <div className="des">
              <h1>The vice president </h1>
              <p>Azhar Merah</p>
           </div>
          </div>
          <div className="BMs">
           <img src={hndImg} alt="about" className="img-abt" />
           <div className="des">
             <h1>The general secretary </h1>
             <p>Hind Dziri</p>
           </div> 
          </div>
            
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;