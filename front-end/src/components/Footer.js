import React from "react";
import { Row, Col} from "react-bootstrap";

export const Footer = () => {
  return (
    <Row>
      <Col
        style={{
          textAlign: "center",
          marginTop: "1rem",
          padding: "10px",
          backgroundColor: "rgb(244, 233, 226)",
        }}
      >
        <p>Copyright © Phone All rights reserved</p>
      </Col>
    </Row>
  );
};
