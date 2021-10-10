import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>SugarSisters</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/producto">
              <Nav.Link>Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;
