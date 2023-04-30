import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <Container className="d-flex mt-4">
      <img className="w-25 h-25" src={logo} alt="" />
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Form.Control
          type="search"
          placeholder="Search your destination..."
          className="me-2 ms-5"
          aria-label="Search"
        />
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-5">
              <Nav.Link href="#features">News</Nav.Link>
              <Nav.Link href="#pricing">Destination</Nav.Link>
              <Nav.Link href="#deets">Blog</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
              <Button variant="warning">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
