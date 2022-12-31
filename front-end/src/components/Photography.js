import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { DetailModal } from "./DetailModal";
import { GET_BLOGS } from "../api/BlogsAPI";

export const Photography = () => {
  const [modalData, setModalData] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const [getBlogsByCategory] = useLazyQuery(GET_BLOGS, {
    onCompleted: (data) => setModalData(data),
  });

  return (
    <Row id="photography" className="align-items-center text-center py-5">
      <Col lg={12}>
        <h1>Photography</h1>
        <h3>- Let's see My Journey -</h3>
      </Col>

      <Row className="my-5">
        <Col lg={2} />
        <Col lg={4}>
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: {
                    category: "photography",
                    categorySubtype: "landscape",
                  },
                },
              });
            }}
          >
            <Image src="images/shrine.jpg" alt="shrine" rounded={true} />
          </button>
        </Col>
        <Col lg={4} className="align-self-center">
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: {
                    category: "photography",
                    categorySubtype: "landscape",
                  },
                },
              });
            }}
          >
            <span className="description">Landscape</span>
          </button>
        </Col>
        <Col lg={2} />
      </Row>

      <Row className="my-5">
        <Col lg={2} />
        <Col lg={4} className="align-self-center">
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "food" },
                },
              });
            }}
          >
            <span className="description">Food</span>
          </button>
        </Col>
        <Col lg={4}>
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "food" },
                },
              });
            }}
          >
            <Image src="images/bow.jpg" alt="Food" rounded={true} />
          </button>
        </Col>
        <Col lg={2} />
      </Row>

      <Row className="my-5">
        <Col lg={2} />
        <Col lg={4}>
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "nature" },
                },
              });
            }}
          >
            <Image src="images/sakura.jpg" alt="sakura" rounded={true} />
          </button>
        </Col>
        <Col lg={4} className="align-self-center">
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "nature" },
                },
              });
            }}
          >
            <span className="description">Nature</span>
          </button>
        </Col>
        <Col lg={2} />
      </Row>

      <Row className="my-5">
        <Col lg={2} />
        <Col lg={4} className="align-self-center">
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "memory" },
                },
              });
            }}
          >
            <span className="description">Beautiful things</span>
          </button>
        </Col>
        <Col lg={4}>
          <button
            style={{ all: "unset" }}
            type="button"
            onClick={() => {
              setModalShow(true);
              getBlogsByCategory({
                variables: {
                  input: { category: "photography", categorySubtype: "memory" },
                },
              });
            }}
          >
            <Image
              src="images/illumination.jpg"
              alt="illumination"
              rounded={true}
            />
          </button>
        </Col>
        <Col lg={2} />
      </Row>

      {modalData && (
        <DetailModal
          data={modalData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </Row>
  );
};
