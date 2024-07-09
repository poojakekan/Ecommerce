// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">1N1-Global</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>
  );
};

export default Header;
