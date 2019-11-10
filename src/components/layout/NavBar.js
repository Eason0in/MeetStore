import React from 'react'
import { Navbar, Nav, Container, Dropdown, ListGroup, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MeetStore</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#complaint">客訴表單</Nav.Link>

            <Dropdown alignRight>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <FontAwesomeIcon icon="shopping-cart" size="lg" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="cart-dropdown-menu">
                <ListGroup variant="flush" horizontal="lg">
                  <ListGroup.Item>
                    <Row>
                      <Col sm={3}>
                        <Image src="https://picsum.photos/id/30/1024/768" rounded fluid="false" />
                      </Col>
                      <Col sm={5}>Cras justo odiossssssssssssssssss</Col>
                      <Col sm={4}>price ：20</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
