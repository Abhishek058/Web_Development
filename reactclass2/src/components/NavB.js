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
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "lightblue",
  });

  const checkStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
    } 
    else if(myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "lightblue",
      });
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={myStyle}>
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
            <Form.Check type="switch" id="custom-switch" label="Dark Mode" onClick={checkStyle}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
