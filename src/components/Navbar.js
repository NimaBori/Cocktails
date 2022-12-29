import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      className="border p-3 shadow bg-light fs-4 d-flex flex-grow-1"
    >
      <div className="flex-grow-1">
        <Nav.Item as="li">
          <Nav.Link href="/" className="text-success fw-bold">
            TheCocktailDB
          </Nav.Link>
        </Nav.Item>
      </div>
      <div className="d-flex">
        <Nav.Item as="li">
          <Nav.Link href="/" eventKey="link-1">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about" eventKey="link-2">
            About
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
