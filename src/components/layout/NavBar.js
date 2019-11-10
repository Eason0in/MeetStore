import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand href="javascript:;">MeetStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/complaint">
              <Nav.Link href="javascript:;">客訴表單</Nav.Link>
            </Link>

            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
