import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import User from "./User";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            alt="dropship logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
            src="/dropship.png"
          />
          Dropship
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Categories">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="">Category 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <User currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
