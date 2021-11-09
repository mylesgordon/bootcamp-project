import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import User from "./User";

const Header = ({
  currentUser,
  setCurrentUser,
  shoppingCart,
  setShoppingCart,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiResponse = await fetch("http://localhost:3002/api/categories");
      setCategories(await apiResponse.json());
    };

    fetchCategories();
  }, []);

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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                // TODO: make this its own component
                categories.map((category) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`/category/${category.id}`}
                    key={category.id}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
          <Nav>
            <User
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
