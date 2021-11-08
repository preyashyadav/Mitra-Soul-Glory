import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from "../images/logo6.png";
import "./Components.css";

const NavbarHome = () => {
  return (
    <ReactBootStrap.Navbar expand="lg">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">
          <div className="navbarlogo">
            <img src={logo} alt="logo" height="90" />
          </div>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#about">
              <div className="navbar-content">About</div>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contact">
              <div className="navbar-content">Contact</div>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};

export default NavbarHome;
