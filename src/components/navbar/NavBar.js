import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assests/images/logo-no-background.svg";

const NavBar = () => {
  return (
    <Navbar variant="light">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link
          className="redirect-button"
          type="button"
          href="https://anshphirani.github.io/Codejs/"
          target="_blank"
        >
          Front-End Playground
        </Nav.Link>
        {/* <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#signup">Signup</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
