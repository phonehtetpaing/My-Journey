import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <Row id="contact" className="text-center">
        <Col style={{ paddingTop: "4%" }}>
          <h1>Contact</h1>
          <h3>- Have a question? -</h3>
          <Row className="d-flex justify-content-between pt-5">
            <Col lg={3} sm={12} style={{ paddingTop: "1rem" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <h4>Address</h4>
              Yangon, Myanmar, 5-2
            </Col>
            <Col lg={3} sm={12} style={{ paddingTop: "1rem" }}>
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <h4>Contact Number</h4>
              000-0000-0000
            </Col>
            <Col lg={3} sm={12} style={{ paddingTop: "1rem" }}>
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              <h4>Email</h4>
              phonehtetpaing1221@gmail.com
            </Col>
            <Col lg={3} sm={12} style={{ paddingTop: "1rem" }}>
              <FontAwesomeIcon icon={faGlobeAfrica} size="lg" />
              <h4>Website</h4>
              https://phonehtetpaing.github.io/
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col lg={6} sm={12} className="text-center pb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.1527521640018!2d96.15843642037584!3d16.779423321892217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46f93eb3c3471cd4!2sSakura%20Tower!5e0!3m2!1sen!2sjp!4v1672394058701!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            title="map"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>

        <Col lg={6} sm={12} >
          <Form className="w-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button variant="danger" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};
