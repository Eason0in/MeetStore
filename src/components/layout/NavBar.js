import React from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MeetStore
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link as={Link} to="/complaint">
                客訴表單
              </Nav.Link>
            </NavItem>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
