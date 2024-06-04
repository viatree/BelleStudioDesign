// src/components/MyNavbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logobiru.png";
import "../App.css";

const MyNavbar = () => {
  return (
    <Navbar className="navbar-transparent" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt="Belle Design Studio"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Belle Design Studio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Get in Touch</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
