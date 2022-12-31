import React from "react";
import { Row, Col, Container } from "react-bootstrap";


export const Top = () => {
  return (
    <Row>
      <div id="home" className="banner text-white">
        <Container>
          <Col style={{ paddingTop: "13rem" }}>
            <h2 className="pb-3">Welcome to Phone!</h2>
            <h1 className="discover">
              Discover your favourite place
              <br />
              with me.
            </h1>
          </Col>
        </Container>
      </div>
    </Row>
  );
};
