import React, { useState } from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import { useLazyQuery, useQuery } from "@apollo/client";
import { CarouselModal } from "./CarouselModal";
import { GET_BLOGS, GET_BLOG_BY_ID } from "../api/BlogsAPI";

export const Travel = () => {
  const [modalData, setModalData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [post, setPost] = useState(false);

  const clickDetails = (_id) => {
    setModalData(null);
    getBlogById({
      variables: {
        input: {
          blogId: _id,
        },
      },
    });
  };

  const [getBlogsByCategory] = useLazyQuery(GET_BLOGS, {
    onCompleted: (data) => {
      setModalData(data);
    },
  });

  const [getBlogById] = useLazyQuery(GET_BLOG_BY_ID, {
    onCompleted: (data) => {
      setPost(data);
    },
  });

  const { loading, error, data } = useQuery(GET_BLOGS, {
    variables: {
      input: {
        category: "countries",
      },
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <Row id="travel" className="text-center">
      <Col lg={12} sm={12} style={{ paddingTop: "4%" }}>
        <h1>Travel</h1>
        <h3>- Select your destination -</h3>
      </Col>
      <Col lg={1} />
      {data.getBlogsByCategory.map((blog, index) => (
        <Col lg={2} sm={12} key={index}>
          <button
                style={{ all: "unset" }}
                type="button"
                onClick={() => {
                  getBlogsByCategory({
                    variables: {
                      input: {
                        category: "photography",
                        categorySubtype: blog.categorySubtype,
                      },
                    },
                  });
                  clickDetails(blog._id);
                }}
              >
          <div className={`hover`}>
            <img
              src={blog.image}
              style={{
                width: "80%",
                borderRadius: "50%",
                border: "gray double 5px",
              }}
              alt={blog.title}
            />
            <p >
              
                {blog.title}
            </p>
          </div>
          </button>

        </Col>
      ))}
      <Col lg={1} />
      {post && (
        <div
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <p>
            {post.getBlogById.title}
          </p>
          <p>
            {post.getBlogById.description}
          </p>
        </div>
      )}
      {modalData !== null && (
        <Row style={{paddingBottom: "5rem"}}>
          <Col lg={2} />
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Row>
                  {modalData.getBlogsByCategory.map((blog, index) => (
                    <Col lg={3} className="my-5" key={index}>
                      {" "}
                      <button
                        style={{ all: "unset" }}
                        type="button"
                        onClick={() => {
                          setModalShow(true);
                        }}
                      >
                        <Image
                          src={blog.image}
                          style={{ width: "150px", height: "100px" }}
                          rounded={true}
                        />
                        <p>{blog.title}</p>
                      </button>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} />
        </Row>
      )}
      {modalData !== null && (
        <CarouselModal
          data={modalData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </Row>
  );
};
