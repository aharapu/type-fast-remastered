import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const InfoBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Link to="/">
        <Navbar.Brand>TypeFast</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link active>High Scores</Nav.Link>
          <Nav.Link active>Instructions</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default InfoBar
