import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export const About = () => {
  return (
    <Row id="about" className="align-items-center text-center about py-5">
      <Col lg={5} sm={12} className="d-flex justify-content-around">
        <Image
          src="images/torii.jpg"
          style={{
            maxWidth: "40%",
            border: "white solid 5px",
          }}
          rounded={true}
          alt="torii"
        />
      </Col>
      <Col lg={6} sm={12}>
        <h1 className="a">About</h1>
        <p className="b">
          Hello! I'm Phone. <br />
          I've been traveling forgein countries for years. Throughout those
          years, I've experienced the unique and colorful cultures and have
          fallen in love with them multiple time over. In this little blog, I
          want to share my individual experiences to you guys.
        </p>
      </Col>
    </Row>
  );
};
