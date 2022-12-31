import { Carousel, Modal, Row, Button } from "react-bootstrap";

export const CarouselModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="xl"
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
            <Carousel>
              {props.data.getBlogsByCategory.map((blog, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={blog.image}
                    alt={blog.title}
                  />
                  <Carousel.Caption>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
