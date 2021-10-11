import React from "react";
import "../../../css/css-header/LowerNavbar.css";
import { Navbar, Nav } from "react-bootstrap";

function LowerNavbar() {
  return (
    <div>
      <Navbar className="Navbar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="Nav-link" href="#">
          News Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" Nav-list mr-auto my-2 my-lg-0"
            style={{ maxHeight: "210px" }}
            navbarScroll
          >
            <Nav.Link className="Nav-link" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="Nav-link" href="#action2">
              About
            </Nav.Link>
            <Nav.Link className="Nav-link" href="#action3">
              Contact Us
            </Nav.Link>
            <Nav.Link className="Nav-link" href="#action4">
              Login/SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default LowerNavbar;
