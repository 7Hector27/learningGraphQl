import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const NavbarComponent = () => {
  const history = useHistory();
  const signout = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Blog spot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Homepage">Home</Nav.Link>
            <Nav.Link href="/DashBoard">Dashboard</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={() => signout()}>Signout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
