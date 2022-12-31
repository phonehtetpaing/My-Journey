import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="images/logo.png"
            width="90"
            alt="logo"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="#home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#travel">Travel</Nav.Link>
            <Nav.Link href="#photography">Photography</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}