import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import RegisterDialog from "./RegisterDialog";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);

  const showDialog = () => setShowRegister(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">Dropship</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="">Category 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="danger" onClick={showDialog}>
              Sign Up
            </Button>

            <RegisterDialog
              showRegister={showRegister}
              setShowRegister={setShowRegister}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
