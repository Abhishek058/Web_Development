import React,{useState} from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function NavB(props) {
  return (
    <Navbar className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">{props.abouttxt}</Nav.Link>
          </Nav>
          <Form>
            <Form.Check type="switch" id="custom-switch" onClick={props.checkStyle}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
