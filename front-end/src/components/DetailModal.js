import React from "react";
import { Row, Col, Button, Card, Modal } from "react-bootstrap";

export const DetailModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.getBlogsByCategory[0].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
        {props.data.getBlogsByCategory.map((blog, index) => (
          <Col lg={6} sm={12} className="mb-3" key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                  {blog.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
